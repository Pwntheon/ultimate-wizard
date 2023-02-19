import Decimal from "break_infinity.js";

type Spell = {
  name : string,
  description : string,
  cost: Decimal,
  cast: () => void
};

export default Spell;