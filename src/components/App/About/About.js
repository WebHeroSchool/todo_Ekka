import React from 'react';
import { CardContent } from '@material-ui/core';
import styles from './About.module.css';
import classnames from 'classnames';
import Preloader from '../Preloader/Preloader';
import AboutUserItem from '../AboutUserItem/AboutUserItem';
import AboutRepos from '../AboutRepos/AboutRepos';
import noteIcon from '../img/note.svg';
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class About extends React.Component {
    state = {
        aboutMe: [],
        isLoading: true,
        repoList: [],
        error: false,
        firstRepo: 0,
        lastRepo: 4
    }

    login = 'Ekka-N';

    componentDidMount() {
        octokit.users.getByUsername({
            username: this.login 
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
            username: this.login
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

    nextPage = () => {
        if (this.state.lastRepo < this.state.repoList.length - 1) {
            this.setState( state => ({
                firstRepo: state.firstRepo + 4,
                lastRepo: state.lastRepo + 4
            }))
        }
    };

    previousPage = () => {
        if (this.state.firstRepo !== 0 ) {
            this.setState( state => ({
                firstRepo: state.firstRepo - 4,
                lastRepo: state.lastRepo - 4
            })); 
        }
    };

    render() {
        const { aboutMe, isLoading, repoList, error, firstRepo, lastRepo } = this.state;

        return (
            <CardContent>
                { isLoading ? <Preloader/> : 
                    error ? 
                    <h2 className={styles.title}>Информация о пользователе недоступна</h2> :
                    <div className={styles.content}> 
                        <AboutUserItem aboutMe={aboutMe} />

                        <h4 className={styles.title}>Список репозиториев:</h4>
                        <div className={styles.repoList}>
                            {(repoList.length === 0) ? <div className={styles.box_empty_list}>
                                <img className={styles.img} src={noteIcon} alt='empty note' />
                                <span className={styles.text}>Репозитории отсутсвуют</span>
                            </div>  
                            : repoList.slice(firstRepo, lastRepo).map(repo => (<AboutRepos repo={repo}  key={repo.id}/>))}
                        </div>

                        <div className={styles.button_container}>
                            <button 
                                onClick={() => this.previousPage()}
                                className={classnames({
                                    [styles.button] : true,
                                    [styles.disable]: firstRepo === 0
                                })}>
                            Назад
                            </button>

                            <button 
                                onClick={() => this.nextPage()}
                                className={classnames({
                                    [styles.button] : true,
                                    [styles.disable]: lastRepo >= repoList.length - 1
                                })}>
                            Далее
                            </button>
                        </div>
                    </div>}
            </CardContent>
        )
    }
};

export default About;