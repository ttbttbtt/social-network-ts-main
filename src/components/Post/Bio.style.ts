import styled from "styled-components";

export const StyledBio = styled.div`
  /* .bio { */
  /* box-shadow: 0 0 10px var(--light-gray); */
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  padding: calc(1vw + 11px);
  /* background-color: var(--elems-bgc); */
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;

  &__data {
    padding-bottom: 30px;
    /* border-bottom: 1px solid var(--light-gray); */
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    margin-bottom: 30px;

    .icon {
      width: 24px;
      height: 24px;
    }

    .data__item {
      display: flex;
      align-items: center;
      gap: 8px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__info {
    margin-bottom: 40px;

    p:not(:last-child) {
      font-size: inherit;
      margin-bottom: 15px;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  /* } */
`;
