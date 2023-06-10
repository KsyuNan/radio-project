import { Stations } from '../../modules/stations/stations'
import './App.scss'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Controls } from '../../components/controls/controls'

function App() {

  return (
      <Container className='mt-3'>
        <Controls />
        <Stations />
      </Container>
  )
}

export default App
