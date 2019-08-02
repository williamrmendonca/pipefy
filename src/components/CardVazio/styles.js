import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: transparent;
  border-radius: 5px;
  border: 2px dotted #999; /*Definindo o estilo da borda*/
  background-color: #ebebeb; /*Cor de fundo para melhor visualização do exemplo*/
  height: 50px; /*Altura para melhor visualização do exemplo*/
  width: 300px; /*Largura para melhor visualização do exemplo*/
  margin-bottom: 10px;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
    width: 100%;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;
