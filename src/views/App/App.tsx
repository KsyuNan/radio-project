import { Stations } from '../../modules/stations/stations/stations'
import './App.scss'
import { Container } from 'react-bootstrap'
import { store } from '../../store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Container className='mt-3'>
        <Stations/>
      </Container>
    </Provider>
  )
}

export default App
