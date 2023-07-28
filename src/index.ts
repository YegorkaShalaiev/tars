import 'dotenv/config';
import Tars from "./Tars.js";

const tars = new Tars(process.env.TELEGRAM_BOT_TOKEN);

//TODO: Move to api (if possible);

tars.onText(/./, async message => await tars.answer(message));

console.log(`TARS is online!`);