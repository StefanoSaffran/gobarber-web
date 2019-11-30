import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 30px 30px 0;

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      padding: 0 15px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      color: rgba(255, 10, 10, 0.8);
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#3b9eff')};
      }
    }
  }
  div {
    margin: 0 30px 0;

    button {
      width: 100%;
      height: 44px;
      margin: 10px 0 0;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#F64C75')};
      }
    }
  }
`;
