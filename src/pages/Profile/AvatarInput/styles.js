import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }
  }
`;

export const Preview = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background: #eee;
`;
