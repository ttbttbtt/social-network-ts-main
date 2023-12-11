import styled from "styled-components";

export const StyledHist = styled.div`
/* .History { */
  position: relative;
  overflow: visible;
  margin-bottom: 20px;

  &__wrapper {
    display: flex;
    gap: 6px;
    overflow: hidden;
  }

  .icon-slider-button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    z-index: 2;

    width: 40px;
    height: 40px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
      /* filter: drop-shadow(0 0 10px var(--prime-color)); */
      filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.primeColor});
    }

    &:active {
      transition: 100ms;
      scale: 0.9;
      filter: none;
    }
  }
/* } */
`