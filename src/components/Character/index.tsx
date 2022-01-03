import { Container } from "./styles"
import { CharacterSide } from "../../types/CharacterSide"

type PropsCharacter = {
  x: number;
  y: number;
  side: CharacterSide
}

export function Character({ x, y, side }: PropsCharacter) {
  const size = 30
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  }

  return (
    <Container
      size={size}
      left={x * size}
      top={y * size}
      sidePosition={sides[side] ?? 0}
    >

    </Container>
  )
}