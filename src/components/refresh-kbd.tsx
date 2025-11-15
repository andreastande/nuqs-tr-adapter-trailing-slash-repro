import { Kbd, KbdGroup } from "./ui/kbd"

export default function RefreshKBD() {
  return (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>R</Kbd>
    </KbdGroup>
  )
}
