import styled from "styled-components";


export const HeaderContainerSC = styled("header")`
  width: 100%;
  height: 77px;
  display: flex;
  background-color: #40E0D0;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  align-items: center;
  border-bottom: 3px solid black;
`
export const HeaderContainerLeftSC = styled("div")`
  width: 142px;
  height: 77px;
`
export const HeaderContainerRigthSC =styled("div")`
  color: black;
  font-size: 20px;
  font-weight: bolder;
  a:not(:last-child){
    margin-right: 28px;
  }  
`
