import styled, { keyframes } from "styled-components";
import pix from "../Assets/775118.jpg";
import { HiOutlineShare } from "react-icons/hi";
import { PiHeartStraight } from "react-icons/pi";
import { useState } from "react";

const Card = () => {
  const [click, setClick] = useState(0);
  const [color, setColor] = useState("");

  const Increment = () => {
    if (click < 1) {
      setClick(click + 1);
    }
  };
  // const colorType = ()=>{
  //        if () {
  //          setColor()
  //        }
  // }

  return (
    <>
      <Container>
        <Wrapper>
          <CardHolder>
            <ImageHolder>
              <Img src={pix} />
            </ImageHolder>
            <Content>
              <Hold>
                
                <Title>Full-Stack Engineer</Title>
                <Desc>
                  Lorem ipsum dolor sit consectetur, adipisicing elit.
                  Debitis esse perspiciatis aliquid{" "}
                </Desc>
              </Hold>
            </Content>
            <DivHolder>
              <Div>Emeka Egwuatu</Div>
              <IconHolder>
                <Icon style={{ fontSize: "23px" }}>
                  <HiOutlineShare />
                </Icon>
                <Icon style={{ fontSize: "23px" }} onClick={Increment}>
                  <PiHeartStraight /> {click}{" "}
                </Icon>
              </IconHolder>
            </DivHolder>
          </CardHolder>
         
        </Wrapper>
      </Container>
    </>
  );
};
export default Card;

// const Container = styled.div``
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

const Txt = styled.div`
  font-size: 10px;
`;

const Icon = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: red;
  cursor: pointer;
  /* flex-direction: column; */
  animation: ${pulseAnimation} 2s infinite;
`;

const IconHolder = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
`;

const Title = styled.div`
  color:  #ff9700;
  font-size: 20px;
  font-weight: bolder;
  font-family: sans-serif;
  text-align: center;
`;

const Hold = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 20px; */
  /* background-color: cornflowerblue; */
  text-align: left;
`;

const Div = styled.div`
  /* height: 30px; */
  background-color: #ff9700;
  border-radius: 5px;
  color: #fff;
  padding: 5px 10px;
  transition: all 450ms;

  &:hover {
    background-color: whitesmoke;
    color: #ff9700;
    cursor: pointer;
    border: 1px solid #ff9700;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const DivHolder = styled.div`
  padding-top: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  height: 120px;
  /* position: relative; */
  /* background-color: brown; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0px;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: blue; */
`;

const CardHolder = styled.div`
  width: 250px;
  height: 375px;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px 0;

  @media screen and (max-width: 835px) {
    width: 95%;
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
  }
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 515px) {
    width: 100%;
  }
`;
