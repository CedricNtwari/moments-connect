import styles from './App.module.css'
import NavBar from '../src/components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/ SignInForm'
import PostCreateForm from './pages/posts/PostCreateForm'
import PostPage from './pages/posts/PostPage'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route path="/signin" render={() => <SignInForm />} />
          <Route path="/signup" render={() => <SignUpForm />} />
          <Route path="/feed" render={() => <h1>Feed page</h1>} />
          <Route path="/liked" render={() => <h1>Liked page</h1>} />
          <Route path="/posts/create" render={() => <PostCreateForm />} />
          <Route path="/posts/:id" render={() => <PostPage />} />
          <Route render={() => <h1>Page not found!!!</h1>} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
