import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

import { useState } from "react"; 








const Q4 = () => { 
    const [selectedImage, setSelectedImage] = useState(
        "http://wallup.net/wp-content/uploads/2016/01/95677-nature-trees-forest-road.jpg"
      );
    
      const handleImageChange = (e) => {
        setSelectedImage(e.target.value);
      };

      
    

    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 4:</span> Build a component
                    </h3>
                    <p>In this section, you are required to build a new component based on a Figma design and prototype. The component's function should be to change the image displayed based on the item selected in the dropdown. Implement this functionality using HTML, CSS, and JavaScript.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                    <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-559&t=YPqmYSs8rLq2ahId-1&scaling=min-zoom&page-id=30%3A35&starting-point-node-id=36%3A230" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
            </StyledContainer>  
            <div className="dropdown-container" style={imageSwitcherStyles}>
        
        <select onChange={handleImageChange} value={selectedImage} style={dropdownStyles}> 
        <option value="http://www.thewowstyle.com/wp-content/uploads/2015/02/6966828-beautiful-mountain-lakes.jpg ">
            Mountain
          </option>
          <option value="http://wallup.net/wp-content/uploads/2016/01/95677-nature-trees-forest-road.jpg"
          
          >
            Forest
          </option>
          <option value="http://wallpapercave.com/wp/b66RjvK.jpg"
          
        >
          
            Ocean
          </option>
          <option value="https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg"
          
          >
            Desert
          </option>
        </select>
        <div className="image-container" style={imageContainerStyles}>
          <img src={selectedImage} alt="Selected Image" 
          style={ imageStyles }
          />
        </div>
      </div>
            

  
  
    



        </StyledWrapper>
    )
} 

export default Q4;




const StyledWrapper=styled(Wrapper)`
background:#F6F7F9;
`
const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsGrid = styled.div`
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    width:300px;
}
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
` 

const imageSwitcherStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "200px",
    margin: "20 70", 
    padding: "10px",
  };
  
  const dropdownStyles = {
    width: "100%", 
    textAlign: "center",
    height: "30px",
    display: "flex",
    flexDirection: "column",
    
   
    borderRadius: "10px", 
    paddding:"60px",
  };
  
  const imageStyles = {
    width: "600px",
    height: "auto", 
    padding:"10px", 
    border:"1px solid black",
    borderRadius: "10px", 
    
    
  };

  const imageContainerStyles = {
    width: "50%",
    height: "auto", 
    padding:"20px",
      
    // Add curved corners
  };