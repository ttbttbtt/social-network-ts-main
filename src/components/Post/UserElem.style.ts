import styled from "styled-components";

export const StyledUserElem = styled.div`
  /* .UserElem { */
  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    /* background-color: var(--light-gray); */
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  &:active {
    transition: 100ms;
    /* background-color: var(--prime-color); */
    background-color: ${(props) => props.theme.colors.primeColor};
    p {
      color: white;
    }

    .Badge {
      background-color: white;
      /* color: var(--text-color); */
      color: ${(props) => props.theme.colors.textColor};
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;

    &::after {
      content: "";
      height: 1px;
      width: 80%;
      /* background-color: var(--light-gray); */
      background-color: ${(props) => props.theme.colors.lightGray};

      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  img {
    flex: 0 0 60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user__description {
    flex: 1 1 auto;

    .main__text {
      margin-bottom: 5px;
      display: inline-block;
    }

  }

  .secondary__text {
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    font-weight: 300;

    &._online {
      /* color: var(--green); */
      color: ${(props) => props.theme.colors.green};
    }
  }
  /* } */
`
