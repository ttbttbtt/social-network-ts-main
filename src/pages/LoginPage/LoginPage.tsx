import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typografy/Heading";
import { StyledLink } from "../../components/Typografy/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
// import { Img } from "../../components/UI/Img/Img";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      {/* <div className="LoginPage"> */}
      <StyledLoginPage>
        {/* <h1>Авторизация</h1> */}
        <Heading headingText="Авторизация" />
        <form>
          {/* <input type="tel" placeholder="Номер телефона" />
          <input type="password" placeholder="Пароль" /> */}
          <Input
            isError={false}
            errorMessage="Ошибка"
            type="tel"
            placeholder="Номер телефона"
          />
          <Input
            isError={true}
            errorMessage="Неверный пароль"
            type="password"
            placeholder="Пароль"
          />

          {/* <button>Войти</button> */}
          <Button isPrimary={true} buttonText="Войти" />
        </form>
        {/* <a href="#">Забыли пароль?</a> */}
        <StyledLink to="/" LinkText="Забыли пароль?" />

        <RegistrationInfo />
        {/* </div> */}
      </StyledLoginPage>
    </Container>
  );
};
