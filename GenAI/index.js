import "dotenv/config"
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod";

const emailTool = tool(
    sendEmail,
    {
        name: "emailTool",
        description: "Use this tool to send an email",
        schema: z.object({
            to: z.string().description("the recipient email address"),
            html: z.string().description("The html content of the email"),
            subject: z.string().description("The subject of the email"),
        })
    }
)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const model = new ChatMistralAI({
    model: "mistral-small-latest"
})

const agent = createAgent({
    model,
    tools: [emailTool]
})

const message = []

while (true) {

    const userInput = await rl.question("\x1b[32mYou:\x1b[0m")

    message.push(new HumanMessage(userInput))

    const response = await agent.invoke(message)

    message.push(response)

    console.log(response);

    // console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`)
}


rl.close();

