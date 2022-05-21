import SwotCard from './components/SwotCard'
import './App.css';
import * as Content from './components/SwotCard/ContentCards';
import styled from '@emotion/styled';

function App() {
  return (
    <Wrapper>
      <CardContainer>
        <SwotCard
          icon={Content.card1.icon}
          type={Content.card1.type}
          counter={Content.card1.counter}
          firstContent={Content.card1.firstContent}
          otherContents={Content.card1.otherContents}
        />

        <SwotCard
          icon={Content.card2.icon}
          type={Content.card2.type}
          counter={Content.card2.counter}
          firstContent={Content.card2.firstContent}
          otherContents={Content.card2.otherContents}
        />

        <SwotCard
          icon={Content.card3.icon}
          type={Content.card3.type}
          counter={Content.card3.counter}
          firstContent={Content.card3.firstContent}
          otherContents={Content.card3.otherContents}
        />

        <SwotCard
          icon={Content.card4.icon}
          type={Content.card4.type}
          counter={Content.card4.counter}
          firstContent={Content.card4.firstContent}
          otherContents={Content.card4.otherContents}
        />
        </CardContainer>
    </Wrapper>
  );
}

export default App;

export const Wrapper= styled.div`
zoom: 1.2;
position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`
export const CardContainer = styled.div`
display: flex;
gap: 46px;
`