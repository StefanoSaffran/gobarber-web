import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 50px auto;

  header {
    display: flex;
    align-items: center;
    align-self: center;
    margin: 0 30px;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 30px 30px 0;
  }
`;

export const Time = styled.li`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  opacity: ${({ past }) => (past ? 0.5 : 1)};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: ${({ available }) => (available ? '#999' : '#7159c1')};
  }

  span {
    display: block;
    margin-top: 5px;
    color: ${({ available }) => (available ? '#999' : '#7159c1')};
  }
`;
