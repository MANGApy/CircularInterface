import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  // Basic health check endpoint
  if (event.path === "/.netlify/functions/api/health") {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "ok" }),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Not Found" }),
  };
};
