import SwotCard from './components/SwotCard'
import './App.css';

//src\components\SWOTCard\01_icon.svg

const cardContent1 ={
  type:'Strengths',
  icon:'icons/swot/01_icon.svg',
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
  type:'Weaknesses',
  counter:'02',
  firstContent: 'Newbie Dev',
  otherContents:[
    'No Work Experience',
    'I Still Need Direction',
    'Too Detailed',
    'Basic Math'
  ],
};

const cardContent3 ={
  type:'Oportunities',
  counter:'03',
  firstContent: 'Tech Industry',
  otherContents:[
    'Full Stack Developer',
    'Fit In Front End Teams',
    'Fit In Back End Teams',
    'Art & Design Habilities'
  ],
};

function App() {
  return (
    <div className="App">
      <SwotCard
      icon={cardContent1.icon}
      type={cardContent1.type}
      counter={cardContent1.counter}
      firstContent={cardContent1.firstContent}
      otherContents={cardContent1.otherContents}
      />

    </div>
  );
}

export default App;
