import styled from "styled-components";

export const StyledLoginPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    display: block;
    width: 100%;
    /* margin-bottom: 20px; */
    /* border: 2px solid ${(props) => props.theme.colors.disabledBgc}; */
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.colors.primeColor};
    }
  }

  button {
    width: 100%;
    margin-bottom: 30px;
  }

   a {
     display: inline-block;
     width: 100%;
     text-align: right;
     text-decoration: none;
     color: ${(props) => props.theme.colors.gray};

     &:hover {
       text-decoration: underline;
     }
   }

   span {
    /* color: #A0A0A0; */
    color: ${(props) => props.theme.colors.gray};
   }

 @media (max-width: 530px) {
     width: 100%;
 }
`;
