import data from '../data';
import Card from './Card'
function App() {
  const cards = [];
  for (let i = 0; i < data.length; i++) {
    const end = i < (data.length - 1);
    cards.push(
      <>
        <Card {...data[i]} />
        {end && <div className='line'></div>}
      </>)
  }
  return (
    <div>
      <div className='main'>
        {cards}
      </div>
    </div>
  );
}

export default App;
