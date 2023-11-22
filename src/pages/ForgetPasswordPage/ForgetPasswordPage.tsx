import React from "react";
import { Heading } from "../../components/Typografy/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";

import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Spanning } from "../../components/Typografy/Spanning";

interface IRegistrationForm {
  username?: string;
  userphone: string;
  userpassword?: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  // username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
//   userpassword: yup
//     .string()
//     .min(4, "Пароль должен содержать как минимум 4 символа")
//     .required("Обязательное поле!"),
});

export const ForgetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      // username: "",
      userphone: "",
    //   userpassword: "",
    },
  });

  console.warn("ERRORS: ", errors);

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Забыли пароль?" />

        {/* <span>Укажите свой номер телефона, чтобы получить код для сброса пароля.</span> */}
        <Spanning spanningText="Укажите свой номер телефона, чтобы получить код для сброса пароля." />

        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
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

          <Button
            isPrimary={true}
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Отправить"
          />
        </form>
      </StyledLoginPage>
    </Container>
  );
};
