import styled from "styled-components";
import {ButtonUI} from "../UI/ButtonUI/ButtonUI";
import {InputPlaceholderUi} from "../UI/InputUI/InputPlaceholderUi";
import {CheckboxUI} from "../UI/CheckboxUI/CheckboxUI";
export const FirstSectionSC = styled("div")`
  display: flex;
  margin-top: 60px;
  justify-content: space-between; 
  
  
  h1{
      margin: 0;
    }
    img{
      width: 544px;
      height: 358px;
      box-shadow: 10px -10px 1px 1px #222222;
    }
`
export const FirstSectionImageSC = styled("div")`
    
`

export const FirstSectionLeftSC = styled("div")`
    margin-left: 70px;
  
`

export const ButtonsFirstSectionSC = styled(ButtonUI)`
`


export const CatalogSC = styled("div")`
  width: 100%;
  margin-top: 80px;
`
export const CatalogTitleSC = styled("div")`
  display: flex;
  justify-content: center;
  font-size: 30px;
  
   h2{
     margin-bottom: 10px ;
   }
`

export const ButtonCatalogSC = styled(ButtonUI)`
  margin-top: 20px;
  font-size: 20px;
  border: 0;
  border-bottom: 2px solid black;
  padding: 0;
  :hover{
    background-color: #fafafa;
  }
`

export const AboutUsSC = styled("div")`
  margin-top: 80px;
  border-bottom: 4px solid black;
  h2{
    font-size: 30px;
  }
`

export const FormContainerSC = styled("div")`
  margin-bottom: 100px;
  margin-top: 100px;
  h2{
    font-size: 30px;
  }
  
  
`
export const FormContantSC = styled("div")`
  display: flex;
  form{
    border: 2px solid black;
    padding: 20px 20px 20px 20px;
    box-shadow: 10px -10px 1px 4px;
    background-color: #40E0D0;
  }
  h3{
    font-size: 30px;
  }
  p{
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  textarea{
    width: 400px;
    height: 170px;
    border: 2px solid black;
    font-size:15px;
    margin-bottom: 10px;
  }
`
export const FormDescriptionSC = styled("span")`
  margin-right: 100px;
`
export const InputFormSC= styled(InputPlaceholderUi)`
  font-size: 20px;
  &:not(:first-child){
    margin-top: 10px;
  }
`


export const FormButtonSC = styled(ButtonUI)`
  
`