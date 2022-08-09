import styled from "styled-components";
import {ButtonUI} from "../../../UI/ButtonUI/ButtonUI";


export const PostButtonSC = styled(ButtonUI)`
    margin-top: 30px;
`

export const ContainerPostSC = styled("div")`
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 30px 60px 30px 60px;
  :hover{
    background-color:#40E0D0;
  }
  img {
    margin-left: 30px;
  }
  
`

export const PostContentSC = styled("div")`
    padding-top: 5px;
`

export const PostTitleSC = styled("div")`
  margin-top: 10%;
  font-size: 20px;
  width: 250px;
  height: 50px;
  overflow: hidden;
`

export const PostPriceSC = styled("div")`
  font-size: 25px;
  margin-top: 15px;
`