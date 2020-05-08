import React from 'react';
import styles from './App.module.css';
import '../../fonts.css';
import Todo from './Todo/Todo';
import About from './About/About';
import Card from '@material-ui/core/Card';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import whsImage from './img/whs.png';
 
class App extends React.Component {

  render() {
    return(
      <Router>
          <div className={styles.wrap}>
            <div className={styles.sidebar}>
              <NavLink to='/'  exact activeClassName={styles.link_active}  className={styles.link}>Обо мне</NavLink>
              <NavLink to='/todo' activeClassName={styles.link_active} className={styles.link}>Список дел</NavLink>
            </div>

            <Card elevation={5} className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo'component={Todo} />
              <img 
                src={whsImage} 
                alt="Выполнено в Web Hero School" 
                title="Выполнено в Web Hero School" 
                width="103px" 
                height="27px"
                className={styles.img}
              />
            </Card>
          </div>
      </Router>
      
    )
  }
}

export default App;