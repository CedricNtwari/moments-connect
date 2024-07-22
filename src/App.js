import styles from './App.module.css'
import NavBar from '../src/components/NavBar'
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/ SignInForm'
import PostCreateForm from './pages/posts/PostCreateForm'
import PostsPage from './pages/posts/PostsPage'
import PostPage from './pages/posts/PostPage'
import { useCurrentUser } from './contexts/CurrentUserContext'

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || ''

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostsPage message="No results found. Adjust the search keyword" />}
          />
          <Route path="/signin" render={() => <SignInForm />} />
          <Route path="/signup" render={() => <SignUpForm />} />
          <Route
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or felllow a user"
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or felllow a user"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route path="/posts/create" render={() => <PostCreateForm />} />
          <Route path="/posts/:id" render={() => <PostPage />} />
          <Route render={() => <h1>Page not found!!!</h1>} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
