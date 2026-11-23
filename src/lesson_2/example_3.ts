import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const buggyCode = `
function add(a, b) {
  return a - b;
}
`;

var models = ["claude-sonnet-5-5", "claude-haiku-5-5", "claude-opus-5-5"];

for (const model of models) {

  const response = await client.messages.create({
    model: model,
    max_tokens: 2048,
    system: "You are a terse senior code reviewer. Give feedback in one paragraph.",
    messages: [
      { role: "user", content: `Review this code:\n${buggyCode}` },
    ],
  });

  console.log(response);

}