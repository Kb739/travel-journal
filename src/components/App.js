import data from '../data';
import Card from './Card'
function App() {
  return (
  <div className='main'>
    <Card {...data[0]}/>
  </div>
  );
}

export default App;
