import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <MainFooter>
        <Content>
        © 2023 Dwayne Miles, LLC
        Evidon AdChoicesAbout Ads
        Subscriber Agreement
        Privacy Policy
        Do Not Sell or Share My Personal Information
        Your US State Privacy Rights
        TV Parental Guidelines
        Sitemap.
        </Content>
      </MainFooter>
    </div>
  )
}

export default Footer

const Content = styled.div`
height: 100%;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
`;
const MainFooter = styled.div`
height: 10vh;
width: 100%;
background-color: lawngreen;
display: flex;
justify-content: center;
align-items: center;
`;