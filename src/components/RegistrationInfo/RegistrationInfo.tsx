import { StyledRegistrationInfo } from "./RegistrationInfo.style";
import { StyledLink } from "../Typografy/StyledLink";

interface RegistrationInfoProps {
  span: string
  linktext: string
  to: string
}

export const RegistrationInfo = ({span, linktext, to}: RegistrationInfoProps) => {
  return (
    <StyledRegistrationInfo>
      <span>
        {/* У вас нет аккаунта? */}
        {span}
        {/* <a href="#">Зарегистрироваться</a> */}
        <StyledLink to={to} LinkText={linktext} />
      </span>

      <p>Войти с помощью</p>

      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </StyledRegistrationInfo>
  );
};
