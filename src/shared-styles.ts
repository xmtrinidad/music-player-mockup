import { css } from 'lit-element';

export const SHARED_STYLES = css`
  * {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  svg {
    pointer-events: none;
  }
`;