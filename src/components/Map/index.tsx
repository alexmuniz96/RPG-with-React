import { useEffect } from "react";
import { Container } from "./styles"
import { Character } from "../Character/index"
import { useCharacter } from "../../hooks/useCharacter"

export function Map() {

  const char = useCharacter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()

        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()


        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()


        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()

        break;
    }
  }

  return (
    <Container>

      <Character x={char.x} y={char.y} side={char.side} />

    </Container>
  )
}