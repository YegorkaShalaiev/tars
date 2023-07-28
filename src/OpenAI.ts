import { Configuration, OpenAIApi } from "openai";

export default class OpenAI extends OpenAIApi {
    constructor(apiKey: string) {
        const configuration: Configuration = new Configuration({apiKey});
        super(configuration);
    }

    async respond(message: string) {
        const response = await this.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}],
        });

        return response.data.choices[0].message?.content ?? '';
    }
}