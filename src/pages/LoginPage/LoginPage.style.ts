import styled from "styled-components";

export const StyledLoginPage = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  border-radius: 20px;
  background-color: var(--elems-bgc);
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }
`;
