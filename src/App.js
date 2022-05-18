import SwotCard from './components/SwotCard'
import './App.css';

const cardContent1 ={
  counter:'01',
   firstContent: 'Tech Industry',
    otherContents:[
      'Communicative',
      'Creative',
      'Good Mate',
      'Innovative'
    ],
  };

  const cardContent2 ={
    counter:'02',
     firstContent: 'Tech Industry',
      otherContents:[
        'Communicative',
        'Creative',
        'Good Mate',
        'Innovative'
      ],
    };

function App() {
  return (
    <div className="App">
      <SwotCard
      counter={cardContent1.counter}
      firstContent={cardContent1.firstContent}
      otherContents={cardContent1.otherContents}
      />

    <SwotCard
      counter={cardContent2.counter}
      firstContent={cardContent2.firstContent}
      otherContents={cardContent2.otherContents}
      />

    </div>
  );
}

export default App;
