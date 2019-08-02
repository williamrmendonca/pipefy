import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 0 15px;
  height: 100%;
  flex: 0 0 300px;
  opacity: ${props => (props.done ? 0.6 : 1)};
  min-height: 100%;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    border-width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
