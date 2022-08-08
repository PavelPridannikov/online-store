import styled from "styled-components";

export const CheckboxUI = styled("div")`
  margin-top: 10px;
    input{
      display: none;
      width: 10px;
      height: 10px;
      border: 1px solid black;
      
    }
    span{
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 2px solid black;
      position: relative;
      transform: translateY(2px);
      margin-right: 7px;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 7px;
        height: 7px;
        background-color: #000;
        opacity: 0;
        transition: .2s;
      }
    }
  input:checked + span:before{
    opacity: 1;
  }
  
  p{
    margin: 0;
  }
`