import Telegraf, { Context } from 'telegraf'

import OpenAI from "./OpenAI.js";

export default class Tars extends Telegraf {
    private api: OpenAI;

    constructor(token: string) {
        super(token);

        this.api = new OpenAI(process.env.OPENAI_API_KEY);
    }

    async answer(ctx: Context) {
        const message: string = ctx.message?.text ?? '';

        let response;

        try {
            response = await this.api.respond(message);
        }
        catch(err: any) {
            response = `An error has been occured: ${err.message}`;
        }

        await ctx.reply(response);
    }
}
