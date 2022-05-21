import styled from '@emotion/styled';

export const CardWrapper = styled.div`
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
export const Circle = styled.div`
    position:relative;
    width: 175px;
    height: 175px;
    background: #434343;
    box-shadow: -12px 18px 17px rgba(0, 0, 0, 0.33), inset 49px -23px 72px #0F0F0F;
    border-radius: 100px;
    margin-top: 12px;
`
export const ContentWrapper = styled.div`
    position: absolute;
    width: 180px;
    height: 105px;
    left: 10px;
    top: 200px;
`
// position: absolute actually makes the element harder to work with
// better just rely on the power of display flex
// position: absolute;
//     width: 62px;
//     height: 70px;
//     left: 0px;
//     bottom: -7px;

// Flex would make more sense on a parent box
// display: flex;
//     align-items: center;
export const CounterCard = styled.h1`
    margin: 0;
    font-family: 'Impact';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 70px;
    color: #1F1F1F;
`

// position: absolute;
//     width: 119px;
//     height: 14px;
//     left: 62px;
//     bottom: 70px;
export const FirstContent = styled.h1`
    margin: 0;
    font-family: 'Kodchasan';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 103.16%;
    text-transform: uppercase;
    text-align: left;
    color: #1F1F1F;
`
// position: absolute;
// left: 62px;
//     top: 27px;
export const OtherContents = styled.div`
    text-align: left;
    width: 119px;
    height: 37px;
    font-family: 'Kodchasan';
    font-style: normal;
    font-size: 8px;
    line-height: 0%;
    text-transform: uppercase;
    color: #1F1F1F;
`
export const Separator = styled.div`
    position: absolute;
    width: 180px;
    height: 2px;
    left: 0px;
    top: 70px;
    background: #1E1E1E;
    border-radius: 2px;
`

export const SwotTitle = styled.h1`
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
export const LogoWrapper = styled.div`
position: absolute;
top: 42px;
left: 43px;
width: 90px;
height: 90px;
text-align: center;
`
