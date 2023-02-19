import Spell from "@/game/spells/spell";
import ManaState from "@/game/state/atoms/manastate";
import F from "@/utils/format";
import { useRecoilState } from "recoil";

export interface CastButtonProps {
  spell: Spell
}

export default function CastButton({ spell }: CastButtonProps) {
  const [mana] = useRecoilState(ManaState);

  const canCast = mana.greaterThanOrEqualTo(spell.cost);
  return (
    <button
      onClick={spell.cast}
      disabled={!canCast}
      title={spell.description}>
      Cast {spell.name} ({F(spell.cost)} mana)
    </button>
  );
}