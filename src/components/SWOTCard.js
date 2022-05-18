import '../App.css';
import styled from '@emotion/styled';

export default function SwotCard(){
    return(
        <CardWrapper>
            <Circle />
        </CardWrapper>

    );
};

let CardWrapper = styled.div`
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
margin-top: 12px
`