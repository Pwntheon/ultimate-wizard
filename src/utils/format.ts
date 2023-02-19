import Decimal from "break_infinity.js";
import GeneralSettings from "../game/settings/generalsettings";
import { format } from "swarm-numberformat";

function F(number: Decimal) {
  return format(number, {
    backend: "decimal.js",
    format: GeneralSettings.numberFormat,
    Decimal: Decimal
  });
}

export default F;