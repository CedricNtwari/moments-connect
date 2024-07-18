import styles from './App.module.css'
import NavBar from '../src/components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route path="/signin" render={() => <h1>Sign In</h1>} />
          <Route path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <h1>Page not found!!!</h1>} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
