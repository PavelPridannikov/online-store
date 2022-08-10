import styled from "styled-components";
import {ButtonUI} from "../../UI/ButtonUI/ButtonUI";

export const ContainerCartPostSC = styled("div")`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid black;
  width: 65%;
  padding: 20px 5px 20px 5px;
  margin-top: 20px;
`

export const CartPostContentSC = styled("div")`
    
`

export const CartPostTitleSC = styled("div")`
  max-width: 300px;
  max-height: 350px;
  margin-top: 20px;
  
`

export const CartButtonsSC = styled("button")`
  display: flex;
  width: 80px;
  height: 30px;
  font-size: 12px;
  padding: 0;
  border: 0;
  background-color: #ffff;
  margin-top: 15px;
  
  button{
    border: 0;
    background-color: #ffff;
    cursor: pointer;
    color: #0070f3;
    &:not(:last-child){
      border-right: 1px solid black;
      padding-left: 0;
    }
  }
`

export const CartPostPriceSC = styled("div")`
  margin-top: 20px;
`

export const CartPriceContainerSC = styled("div")`
  
`