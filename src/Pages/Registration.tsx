import dummy from "../Assets/dummy.jpg";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const Registeration = () => {
  const [name, setName] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [location, setLocation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleImage: any = (e: any) => {
    const file = e.target.files[0];
    const readFile = URL.createObjectURL(file);
    setImageURL(file);
    setImage(readFile);
  };

  let getData = [];
  let arrData = [
    {
      stack: "Project Manager",
      description:
        "As a project Manager i Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,consequatur delectus? Amet id odit iste accusamus vitae corrupti esse assumenda non tempora illo, delectus velit, dolore placeat provident dignissimos saepe....",
    },
    {
      stack: "FrontEnd Engrineer",
      description:
        "As a FrontEnd Engrineer i Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,consequatur delectus? Amet id odit iste accusamus vitae corrupti esse assumenda non tempora illo, delectus velit, dolore placeat provident dignissimos saepe....",
    },
    {
      stack: "BackEnd Engrineer",
      description:
        "As a BackEnd Engrineeri Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,consequatur delectus? Amet id odit iste accusamus vitae corrupti esse assumenda non tempora illo, delectus velit, dolore placeat provident dignissimos saepe....",
    },
    {
      stack: "BlockChain Engrineer",
      description:
        "As a BlockChain Engrineer i Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,consequatur delectus? Amet id odit iste accusamus vitae corrupti esse assumenda non tempora illo, delectus velit, dolore placeat provident dignissimos saepe....",
    },
    {
      stack: "UI/UX Designer",
      description:
        "As a UI/UX Designer i Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,consequatur delectus? Amet id odit iste accusamus vitae corrupti esse assumenda non tempora illo, delectus velit, dolore placeat provident dignissimos saepe....",
    },
  ];

  return (
    <Container>
      <Main>
        <Image>
          <ImgInput type="file" id="pix" onChange={handleImage} />

          <Img src={imageURL === "" ? dummy : image} />
          <ImageLabel htmlFor="pix">
            <AiFillCamera size={23} style={{ marginLeft: "3px" }} />
          </ImageLabel>
        </Image>
        <Form>
          <Holder>
            <InputName>Enter your Name</InputName>
            <Input
              placeholder="Enter your Name"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
          </Holder>
          <Space />
          <HolderDouble>
            <Holder>
              <InputName>Enter your Email</InputName>
              <Input
                placeholder="Enter your Email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </Holder>
            <Holder>
              <InputName>Enter your Phone</InputName>
              <Input
                placeholder="Enter your Phone"
                value={phone}
                onChange={(e: any) => {
                  setPhone(e.target.value);
                }}
              />
            </Holder>
          </HolderDouble>
          <Space />
          <Space />
          <Space />
          <Holder>
            <InputName>Enter your Location</InputName>
            <Input
              placeholder="Enter your Location"
              value={location}
              onChange={(e: any) => {
                setLocation(e.target.value);
              }}
            />
          </Holder>
          <ButtonHolder>
            {/* <Link to ="/flyer"> */}
            <Button
              to="/flyer"
              onClick={() => {
                console.log("data: ", name, location, email, phone, image);

                let choice =
                  arrData[Math.floor(Math.random() * arrData.length)];

                const time = new Date().getTime();

                const data = {
                  id: uuid(),
                  name,
                  location,
                  email,
                  phone,
                  image,
                  time,
                  like: 0,
                  stack: choice.stack,
                  description: choice.description,
                };

                getData = JSON.parse(localStorage.getItem("invited")!) || [];
                getData.push(data);
                localStorage.setItem("invited", JSON.stringify(getData));

                // localStorage.setItem("invited", JSON.stringify([])!);

                // localStorage.setItem("invited", JSON.stringify(getData)!);
              }}
            >
              Submit
            </Button>
            {/* </Link> */}
          </ButtonHolder>
        </Form>
      </Main>
    </Container>
  );
};

export default Registeration;

const ImgInput = styled.input`
  display: none;
`;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  background-color: darkorange;
  width: 92%;
  text-decoration: none;
  height: 50px;
  margin-top: 30px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 360ms;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Space = styled.div`
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
  &::placeholder {
    font-family: Poppins;
  }
`;

const InputName = styled.div`
  position: absolute;
  font-size: 11px;
  background-color: white;
  top: -10px;
  left: 20px;
  padding: 0 5px;
  font-weight: bold;
`;

const HolderDouble = styled.div`
  margin: 10px 0;
  display: flex;
  margin: 10px 0;
  width: 95%;
`;

const Holder = styled.div`
  width: 90%;
  margin: 10px;
  height: 40px;
  border: 1px solid silver;
  border-radius: 3px;
  position: relative;
`;

const ImageLabel = styled.label`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff3e4;
  transition: all 350ms;
  /* font-size: 25px; */
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 300px;
  min-height: 400px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.div`
  width: 300px;
  min-height: 400px;
  position: relative;
  /* border: 1px solid black; */
  margin-left: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  width: 500px;
  min-height: 200px;
  /* border: 1px solid black; */
  /* display: hidden; */
  @media screen and (max-width: 515px) {
    width: 100%;
    border: 1px solid red;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;