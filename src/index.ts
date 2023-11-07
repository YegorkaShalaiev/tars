import 'dotenv/config';
import Tars from "./Tars.js";
import { MESSAGE } from "./constants/updateTypes.js";

const tars = new Tars(process.env.TELEGRAM_BOT_TOKEN);

tars.on(MESSAGE, tars.answer);

tars.launch()

console.log(`TARS is online!`);