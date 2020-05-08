import React from 'react'
import classnames from 'classnames'
import styles from './AboutRepos.module.css'
import starIcon from '../img/star.svg'
import forkIcon from '../img/fork.svg'

const AboutRepos = ( {repo} ) => {

    const gitLink =  'https://ekka-n.github.io/';
    
    const getDate = (date) => {
        const arr = date.split('-');
        return arr[2].slice(0,2) + '.' + arr[1] + '.' + arr[0];
 };
    
    return (<div className={styles.repo}>
        <div className={styles.links}>
            <a href={repo.html_url} className={styles.repo_url}>
                {repo.name}
            </a>
            <a href={gitLink + repo.name} className={styles.demo}>демо</a>
        </div>
        
        <div className={styles.desc}>
            <div className={
                classnames({
                    [styles.language]: true,
                    [styles.html]: repo.language === 'HTML',
                    [styles.css]: repo.language === 'CSS',
                    [styles.js]: repo.language === 'JavaScript',
                })
            }>{repo.language}
            </div>
            
            <div className={styles.descIcon}>
                <img src={starIcon}/>
                <span>{repo.stargazers_count}</span>
            </div>
            
            <div className={styles.descIcon}>
                <img src={forkIcon} />
                <span>{repo.forks_count}</span>
            </div>

            <div className={styles.updated}> Обновлен: {getDate(repo.updated_at)}</div>
        </div>
    </div>);
}

export default AboutRepos;