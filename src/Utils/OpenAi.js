import OpenAI from "openai";
import { OPEN_AI_GPT_KEY } from "./Constant";

const openai = new OpenAI({
  apiKey: OPEN_AI_GPT_KEY,
  dangerouslyAllowBrowser:true,
});

export default openai;
