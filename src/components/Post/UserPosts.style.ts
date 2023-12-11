import styled from "styled-components";

export const StyledUserPosts = styled.div`
  /* .UserPosts { */
    /* box-shadow: 0 0 10px var(--light-gray); */
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    /* background-color: var(--elems-bgc); */
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    position: relative;

    .icon {
      width: 20px;
      height: 20px;
      transition: 200ms;
      /* fill: var(--prime-color); */
      fill: ${(props) => props.theme.colors.primeColor};
    }

    &__controls {
      display: flex;
      margin-bottom: 20px;

      .tabs {
        flex: 1 1 auto;

        display: flex;
        align-items: center;
        gap: 15px;

        .tab {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid transparent;

          transition: 200ms;

          &._active {
            /* border-color: var(--light-gray); */
            border-color: ${(props) => props.theme.colors.lightGray};
            /* background-color: var(--bgc); */
            background-color: ${(props) => props.theme.colors.bgc};
          }

          &:hover {
            /* border-color: var(--light-gray); */
            border-color: ${(props) => props.theme.colors.lightGray};
            /* background-color: var(--bgc); */
            background-color: ${(props) => props.theme.colors.bgc};
          }

          &:active {
            /* background-color: var(--prime-color); */
            background-color: ${(props) => props.theme.colors.primeColor};
            color: white;
            transition: 100ms;

            .icon {
              fill: white;
            }
          }
        }
      }

      .upload-media {
        cursor: pointer;
        flex: 0 1 auto;

        display: flex;
        align-items: center;
        gap: 5px;

        padding: 8px;
        border: 1px solid transparent;
        border-radius: 10px;

        transition: 200ms;

        .icon {
          width: 15px;
          height: 15px;
          /* fill: var(--prime-color); */
          fill: ${(props) => props.theme.colors.primeColor};
        }

        &:hover {
          /* border-color: var(--light-gray); */
          border-color: ${(props) => props.theme.colors.lightGray};
          /* background-color: var(--bgc); */
          background-color: ${(props) => props.theme.colors.bgc};
        }

        &:active {
          transition: 100ms;
          /* background-color: var(--prime-color); */
          background-color: ${(props) => props.theme.colors.primeColor};
          color: white;

          .icon {
            fill: white;
          }
        }
      }
    }

    .media-container {
      margin-bottom: 20px;
    }

    .show-all {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: 200ms;

      margin: 0 0 0 auto;
      width: fit-content;

      .icon {
        width: 15px;
        height: 15px;
        /* fill: var(--prime-color); */
        fill: ${(props) => props.theme.colors.primeColor};
        rotate: -90deg;
      }

      &:hover {
        /* border-color: var(--light-gray); */
        border-color: ${(props) => props.theme.colors.lightGray};
        /* background-color: var(--bgc); */
        background-color: ${(props) => props.theme.colors.bgc};
      }

      &:active {
        transition: 100ms;
        /* background-color: var(--prime-color); */
        background-color: ${(props) => props.theme.colors.primeColor};
        color: white;

        .icon {
          fill: white;
        }
      }
    }
  /* } */
`;
