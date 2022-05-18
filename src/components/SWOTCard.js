import '../App.css';
import styled from '@emotion/styled';

export default function SwotCard(props){
    return(
        <CardWrapper>
            <Circle />
            <ContentWrapper>
                <CounterCard>{props.counter}</CounterCard>
                <FirstContent>{props.firstContent}</FirstContent>
                <OtherContents>
                    {props.otherContents.map((content, index)=><p key={index} >{content}</p>)}
                </OtherContents>
                <Separator />
                <SwotTitle>{props.type}</SwotTitle>
            </ContentWrapper>
        </CardWrapper>

    );
};

let CardWrapper = styled.div`
    position:relative;
    width: 200px;
    height: 360px;
    background: linear-gradient(178.19deg, #FFBB00 45.24%, #FF8F00 103.56%);
    box-shadow: -17px 25px 15px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
let Circle = styled.div`
    width: 175px;
    height: 175px;
    background: #434343;
    box-shadow: -12px 18px 17px rgba(0, 0, 0, 0.33), inset 49px -23px 72px #0F0F0F;
    border-radius: 100px;
    margin-top: 12px;
`
let ContentWrapper = styled.div`
    position: absolute;
    width: 180px;
    height: 105px;
    left: 10px;
    top: 200px;
`
let CounterCard = styled.h1`
    position: absolute;
    width: 62px;
    height: 70px;
    left: 0px;
    bottom: -7px;
    font-family: 'Impact';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 70px;
    display: flex;
    align-items: center;
    color: #1F1F1F;
`

const FirstContent= styled.h1`
    position: absolute;
    width: 119px;
    height: 14px;
    left: 62px;
    bottom: 70px;
    font-family: 'Kodchasan';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 103.16%;
    text-transform: uppercase;
    text-align: left;
    color: #1F1F1F;
`
const OtherContents = styled.div`
    text-align: left;
    position: absolute;
    width: 119px;
    height: 37px;
    left: 62px;
    top: 27px;
    font-family: 'Kodchasan';
    font-style: normal;
    font-size: 8px;
    line-height: 0%;
    text-transform: uppercase;
    color: #1F1F1F;
`
let Separator= styled.div`
    position: absolute;
    width: 180px;
    height: 2px;
    left: 0px;
    top: 70px;
    background: #1E1E1E;
    border-radius: 2px;
`

let SwotTitle= styled.h1`
    background: red;
    position: absolute;
    width: 148px;
    height: 29px;
    left: 16px;
    top: 62px;
    font-family: 'Impact';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    color: #1F1F1F;
`