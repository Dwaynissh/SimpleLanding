import styled, { keyframes } from "styled-components";
import logo from "../../Assets/CodeLab Best Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image>
            <img src={logo} alt="Logo" />
          </Image>

          <NavLink to={"/register"} style={{ textDecoration: "none" }}>
            <Button>Register</Button>
          </NavLink>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
  width: 40%;
  height: 30px;
  background-color: blanchedalmond;
  padding: 7px 40px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #ff9700;
  color: #fff;
  border-radius: 4px;
  transition: all 300ms;
  &:hover {
    background-color: #fff;
    color: #ff9700;
    border: 1px solid #ff9700;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  @media (max-width: 768px) {
    width: 40%;
    font-size: 17px;
    height: 20px;
    padding: 10px 30px;
  }
`;

const pulseAnimation = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.02);
}
100% {
  transform: scale(1);
}
`;

const Image = styled.div`
  width: 17%;
  height: 60px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: ${pulseAnimation} 2s infinite;
  }
  @media (max-width: 768px) {
    width: 30%;
    height: 20px;
  }
`;

const Wrapper = styled.div`
  height: 60px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: whitesmoke;
  z-index: 10;
`;
