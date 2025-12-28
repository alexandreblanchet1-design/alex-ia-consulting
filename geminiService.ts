import { ChatMessage } from "../types";

export const getGeminiResponse = async (
  history: ChatMessage[],
  message: string
): Promise<string> => {
  try {
    const res = await fetch("/.netlify/functions/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ history, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Agent error");
    }

    if (!data?.reply) {
      throw new Error("Réponse vide");
    }

    return data.reply as string;
  } catch (error) {
    console.error("Agent API Error:", error);
    return "Désolé, je rencontre une difficulté technique. Vous pouvez me contacter à alex@alexiaconsulting.fr.";
  }
};

