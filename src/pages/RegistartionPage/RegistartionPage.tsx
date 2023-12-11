import React, { useEffect } from "react";
import { Heading } from "../../components/Typografy/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
// import { RegaInfo } from "../../components/RegaInfo/RegaInfo";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { StyledLoginPage } from "../LoginPage/LoginPage.style"; // стилизация такая же

import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
  usercity: string;
}

// const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    // .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
});

// const mockUser = {
//   mail: "petya@mail.com",
//   phone_number: "7654321",
//   user_id: 2,
//   name: "Petya Petin",
//   reg_date: new Date().toISOString(),
//   city: "Samarkand",
// };

export const RegistartionPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  // } = useForm<IRegistrationForm>({
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
      usercity: "",
    },
  });

  console.warn("ERRORS: ", errors);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state: RootState) => state.authSlice.user);
  const user = useSelector((state: RootState) => state.userSlice.user);
  console.log("state-rega: ", user);

  const [registerUser, { data: userData }] = useRegisterUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registerUser({ name: data.username, email: data.useremail, phone_number: data.userphone, password: data.userpassword, user_city: data.usercity });
    // dispatch(setUser(mockUser));
    console.log("DATA: ", data);
  };
  
  useEffect(() => {
    console.log("USER: ", userData);

    if (userData?.user_id) {
      navigate("/");
    }
  }, [userData, navigate]);

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.username ? true : false}
                errorMessage={errors.username?.message}
                type="text"
                placeholder="Имя и фамилия"
                {...field}
              />
            )}
          />

          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />

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

          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.usercity ? true : false}
                errorMessage={errors.usercity?.message}
                type="text"
                placeholder="Город"
                {...field}
              />
            )}
          />

          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Зарегистрироваться"
          />
        </form>
        {/* <RegaInfo /> */}
        <RegistrationInfo
          span="Уже есть аккаунт?"
          linktext="Войти"
          to="/login"
        />
      </StyledLoginPage>
    </Container>
  );
};
