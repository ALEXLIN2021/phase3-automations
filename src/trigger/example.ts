import { logger, task } from "@trigger.dev/sdk/v3";

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async () => {
    const envCheck = {
      anthropic: !!process.env.ANTHROPIC_API_KEY,
      firecrawl: !!process.env.FIRECRAWL_API_KEY,
      googleServiceAccount: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      googlePrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    };

    logger.log("Environment check", envCheck);

    return { message: "Hello, world!", envCheck };
  },
});