import React from "react";

import { Container } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <footer class="app-footer">
          <span>
            <a href="https://www.tecmasternet.com.br">W7apps</a> © 2019
          </span>
          <span class="ml-auto">
            Powered by <a href="https://www.tecmasternet.com.br">Tecmaster - William Robson Mendonça</a>
          </span>
        </footer>{" "}
      </Container>
    </>
  );
}
