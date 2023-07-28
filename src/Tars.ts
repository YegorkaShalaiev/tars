import TelegramBot, { Message } from 'node-telegram-bot-api';
import OpenAI from "./OpenAI.js";

export default class Tars extends TelegramBot {
    private api: OpenAI;

    constructor(token: string) {
        super(token, {polling: true});

        this.api = new OpenAI(process.env.OPENAI_API_KEY);
    }

    async answer(msg: Message) {
        const chatId: number = msg.chat.id;
        const message: string = msg.text ?? '';

        let response;

        try {
            response = await this.api.respond(message);
        }
        catch(err: any) {
            response = `An error has been occured: ${err.message}`;
        }

        await this.sendMessage(chatId, response);
    }
}
