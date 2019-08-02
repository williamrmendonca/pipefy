import React from "react";

import { MdAdd } from "react-icons/md";

import Card from "../Card";
import CardVazio from "../CardVazio";

import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        <CardVazio key={0} listIndex={listIndex} />

        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
