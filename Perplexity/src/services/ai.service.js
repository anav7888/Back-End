import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY
});

export async function testAI(){
    model.invoke("what is ai explain under 100 words give a response in hinglish").then((response)=>{
        console.log(response.text)
    })
}