import styles from './App.module.css'
import NavBar from '../src/components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route path="/signin" render={() => <h1>Sign In</h1>} />
          <Route path="/signout" render={() => <h1>Sign Out</h1>} />
          <Route render={() => <h1>Page not found!!!</h1>} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
