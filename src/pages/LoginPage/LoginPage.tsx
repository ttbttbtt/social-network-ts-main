import React from "react";
import "./LoginPage.scss"; // не используется - можно закомментить и удалить файл
import { Heading } from "../../components/Typografy/Heading";
import { StyledLink } from "../../components/Typografy/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
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
            isError={false}
            errorMessage="Неверный пароль"
            type="password"
            placeholder="Пароль"
          />

          {/* <button>Войти</button> */}
          <Button isPrimary={true} buttonText="Войти" />
        </form>
        {/* <a href="#">Забыли пароль?</a> */}
        <StyledLink to="/" LinkText="Забыли пароль?" />

        {/* <RegistrationInfo /> */}
        <RegistrationInfo span="У вас нет аккаунта?" linktext="Зарегистрироваться" to="/rega" />
        {/* </div> */}
      </StyledLoginPage>
    </Container>
  );
};
