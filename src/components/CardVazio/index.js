import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container } from "./styles";

export default function Card({ listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", listIndex },
    canDrag: false,
    collect: monitor => ({
      //isDragging: monitor.isDragging()
      isDragging: monitor.canDrag()
    })
  });

  /* TODO Verificar fluxo das informações
   * Onde grava o tipo da lista após mudar
   * Como gravar manças
   */
  // TODO IHSKDJHSKJSG
  // UIAYSDIUAFY

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = 0;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }
      // TODO multiline example
      //  second line
      //  third line
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      /* TODO multiline example
       **  second line
       **  third line
       */
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return <Container ref={ref} isDragging={isDragging} />;
}
