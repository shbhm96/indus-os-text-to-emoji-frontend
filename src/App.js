//import { Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import HomePage from './component/HomePage'
import AddEmoji from './component/shared/AddEmoji'
import NotFoundPage from './component/shared/NotFoundPage'
import ShowMessages from './component/ShowMessages'
import TextToEmoji from './component/TextToEmoji'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' component={TextToEmoji} exact={true} />
        <Route path='/showSavedMessages' component={ShowMessages} exact />
        <Route path='/addEmoji' component={AddEmoji} exact />

        {/* Not Found Page */}
        <Route path='*' component={NotFoundPage} exact={true} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
