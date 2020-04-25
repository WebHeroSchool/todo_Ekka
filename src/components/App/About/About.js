import React from 'react';
import { CardContent } from '@material-ui/core';
import styles from './About.module.css';
import Preloader from '../Preloader/Preloader'
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class About extends React.Component {
    state = {
        aboutMe: [],
        isLoading: true,
        repoList: [],
        error: false
    }

    componentDidMount() {
        octokit.users.getByUsername({
            username: 'Ekka-N'
        })
        .then(({ data }) => {
            this.setState({
                aboutMe: data
            })
        })
        .catch(() => {
            this.setState({
                error: true
            })
        });

        octokit.repos.listForUser({
            username: 'Ekka-N'
        })
        .then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            })
        })
        .catch(() => {
            this.setState({
                isLoading: false,
                error: true
            })
        });
    };

    render() {
        const { aboutMe, isLoading, repoList, error } = this.state;

        return (
            <CardContent className={styles.wrap}>
                { isLoading ? <Preloader/> : 
                    error ? <h2 className={styles.title}>Информация о пользователе недоступна</h2> :
                        <div className={styles.content}>                    
                            <h2 className={styles.title}>
                                Обо мне
                            </h2>
                            <div className={styles.desc}>
                                <img src={aboutMe.avatar_url} className={styles.avatar}/>
                                <div>
                                    <p className={styles.text}>Имя: {aboutMe.name}</p>
                                    <p className={styles.text}>Описание: {aboutMe.bio}</p>
                                </div>
                            </div>                            
                            <h4 className={styles.text}>Список репозиториев:</h4>
                            <ol>
                                {repoList.map(repo => (
                                    <a href={repo.html_url} className={styles.repo_url}>
                                        <li key={repo.id} className={styles.repo}>
                                            {repo.name}
                                        </li>
                                    </a>))}
                            </ol>
                    </div>}
            </CardContent>
        )
    }
};

export default About;