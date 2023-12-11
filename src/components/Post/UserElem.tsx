import { StyledUserElem } from "./UserElem.style";

interface IUserElemProps {
  maintext: string;
}

export const UserElem = ({ maintext }: IUserElemProps) => {
  return (
    <StyledUserElem>
      <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
      <div className="user__description">
        <p className="main__text">{maintext}</p>
        <p className="secondary__text _online">Онлайн</p>
      </div>
      <span className="Badge">3</span>
    </StyledUserElem>
  );
};
