import styled from "styled-components";


export const FooterContainerSC = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  padding-left: 100px;
  width: 100%;
  height: 80px;
  background-color: #40E0D0;
  border-top: 3px solid black;
  
  align-items: center;
`

export const FooterContainerLeftSC = styled("div")`
  color: black;
  font-size: 16px;
  font-weight: bolder;
  a:not(:first-child){
    margin-left: 28px;
  }
  
`

export const FooterContainerRightSC = styled("div")`
`