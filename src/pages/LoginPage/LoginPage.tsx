import React, { useEffect } from "react";
import "./LoginPage.scss"; // не используется - можно закомментить и удалить файл
import { Heading } from "../../components/Typografy/Heading";
import { StyledLink } from "../../components/Typografy/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";

import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

interface IRegistrationForm {
  username?: string;
  userphone: string;
  userpassword: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  // username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа")
    .required("Обязательное поле!"),
});

const mockUser = {
  mail: 'vasya@mail.com',
  phone_number: '1234567',
  user_id: 1,
  name: 'Vasya Petrov',
  reg_date: new Date().toISOString(),
  city: 'Andijan',
}

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      // username: "",
      userphone: "",
      userpassword: "",
    },
  });

  console.warn("ERRORS: ", errors);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user = useSelector((state: RootState) => state.userSlice.user)
  console.log('state-login: ', user)

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    dispatch(changeUser(mockUser))
    console.log("DATA: ", data);
  };

  useEffect(() => {
    console.log('USER: ', user)

    if (user?.user_id) {
      navigate("/profile")
    }

  }, [user])

  return (
    <Container>
      {/* <div className="LoginPage"> */}
      <StyledLoginPage>
        {/* <h1>Авторизация</h1> */}
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          {/* <input type="tel" placeholder="Номер телефона" />
          <input type="password" placeholder="Пароль" /> */}
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                errorMessage={errors.userphone?.message}
                type="tel"
                placeholder="Номер телефона"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />

          {/* <button>Войти</button> */}
          <Button
            isPrimary={true}
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Войти"
          />
        </form>
        {/* <a href="#">Забыли пароль?</a> */}
        <StyledLink to="/" LinkText="Забыли пароль?" />

        {/* <RegistrationInfo /> */}
        <RegistrationInfo
          span="У вас нет аккаунта?"
          linktext="Зарегистрироваться"
          to="/rega"
        />
        {/* </div> */}
      </StyledLoginPage>
    </Container>
  );
};
