import * as Styled from './styles';
import {FlexContainer} from '../../styles/general';

export default function SwotCard(props) {
  return (
    <Styled.CardWrapper>
      <Styled.Circle>
        <Styled.LogoWrapper>
          <img src={props.icon} alt="SWOT Icon" />
        </Styled.LogoWrapper>
      </Styled.Circle>
      <Styled.ContentWrapper>
        <FlexContainer gap='4px' alignCenter>
          <Styled.CounterCard>{props.counter}</Styled.CounterCard>
          <FlexContainer gap='4px' column>
            <Styled.FirstContent>{props.firstContent}</Styled.FirstContent>
            <Styled.OtherContents>
              {props.otherContents.map((content, index) => <p key={index} >{content}</p>)}
            </Styled.OtherContents>
          </FlexContainer>
        </FlexContainer>
        <Styled.Separator />
        <Styled.SwotTitle>{props.type}</Styled.SwotTitle>
      </Styled.ContentWrapper>
    </Styled.CardWrapper>

  );
};
