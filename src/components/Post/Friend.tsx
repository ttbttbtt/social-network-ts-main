import { StyledFriend } from "./Friend.style";

interface IFriendProps {
  name: string;
}

export const Friend = ({ name }: IFriendProps) => {
  return (
    <StyledFriend>
      <img src="./img/users/aleksandr-maykov.jpeg" alt="Friend" />
      <span className="friend__name">{name}</span>
    </StyledFriend>
  );
};
