import React from "react";
import { Heading } from "../../components/Typografy/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegaInfo } from "../../components/RegaInfo/RegaInfo";
import { StyledLoginPage } from "../LoginPage/LoginPage.style"; // !!!

export const RegistartionPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form>
          <Input
            isError={false}
            errorMessage="Ошибка"
            type="text"
            placeholder="Имя и фамилия"
          />
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
          <Button isPrimary={true} buttonText="Зарегистрироваться" />
        </form>
        <RegaInfo />
      </StyledLoginPage>
    </Container>
  );
};
