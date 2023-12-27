import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Heading } from "../../components/Typografy/Heading";
import { StyledLink } from "../../components/Typografy/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  useremail: string;
  userpassword: string;
}

// const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  useremail: yup
    .string()
    .email()
    // .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

// const mockUser = {
//   user_id: 1,
//   mail: "vasya@mail.com",
//   phone_number: "1234567",
//   name: "Vasya Petrov",
//   reg_date: new Date().toISOString(),
//   city: "Andijan",
// };

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const [loginUser, { data: userData }] = useLoginUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    loginUser({ email: data.useremail, password: data.userpassword });
    // dispatch(changeUser(data));
    // console.table(data);
  };

  useEffect(() => {
    console.log("USER: ", userData);

    if (userData?.user_id) {
      // navigate("/profile");
      navigate("/");
      localStorage.setItem('userLoginData', JSON.stringify(userData))
    }
  }, [userData, navigate]);

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
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
          <Button
            disabled={!!Object.keys(errors).length}
            isPrimary
            type="submit"
            buttonText="Войти"
          />
        </form>
        <StyledLink to="/" LinkText="Забыли пароль?" />
        <RegistrationInfo
          span="У вас нет аккаунта?"
          linktext="Зарегистрироваться"
          to="/rega"
        />
      </StyledLoginPage>
    </Container>
  );
};
