import * as Styled from '../styles';

export default function SwotCard(props){
    return(
        <Styled.CardWrapper>
            <Styled.Circle>
                <Styled.LogoWrapper>
                <img src={props.icon} alt="SWOT Icon" />
                </Styled.LogoWrapper>
            </Styled.Circle>
            <Styled.ContentWrapper>
                <Styled.CounterCard>{props.counter}</Styled.CounterCard>
                <Styled.FirstContent>{props.firstContent}</Styled.FirstContent>
                <Styled.OtherContents>
                    {props.otherContents.map((content, index)=><p key={index} >{content}</p>)}
                </Styled.OtherContents>
                <Styled.Separator />
                <Styled.SwotTitle>{props.type}</Styled.SwotTitle>
            </Styled.ContentWrapper>
        </Styled.CardWrapper>

    );
};
