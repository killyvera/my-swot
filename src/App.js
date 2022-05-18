import SwotCard from './components/SwotCard'
import './App.css';

const cardContent ={counter:'00', firstContent: 'Tech Industry'}

function App() {
  return (
    <div className="App">
      <SwotCard
      counter={cardContent.counter}
      firstContent={cardContent.firstContent}
      
      />

    </div>
  );
}

export default App;
