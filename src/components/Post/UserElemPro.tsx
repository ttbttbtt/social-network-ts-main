import { StyledUserElem } from "./UserElem.style";

interface IUserElemProProps {
    maintext: string;
    secondarytext: string;
}

export const UserElemPro = ({ maintext, secondarytext }: IUserElemProProps) => {
  return (
    <StyledUserElem>
    <img src="./img/profile/profile-img-1.jpeg" alt="User" />
    <div className="user__description">
      <p className="main__text">{maintext}</p>
      <p className="secondary__text">{secondarytext}</p>
    </div>
    <span className="Badge">3</span>
    </StyledUserElem>
  );
};