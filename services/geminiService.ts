import { GoogleGenAI, Type } from "@google/genai";
import { EmergencyCalmResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCalmingContent = async (
  currentFeeling: string
): Promise<EmergencyCalmResponse> => {
  try {
    const model = "gemini-3-flash-preview";
    const prompt = `
      You are a gentle, calming mental wellness assistant called 'MindControl AI'.
      The user is feeling: "${currentFeeling}".
      
      Provide a reassuring message and a physical action.
      Keep the tone soft, airy, and non-judgmental.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: {
              type: Type.STRING,
              description: "A short, comforting, and empathetic 1-2 sentence reassurance.",
            },
            action: {
              type: Type.STRING,
              description: "A specific, very short (1 sentence) immediate physical grounding or breathing technique.",
            },
          },
          required: ["message", "action"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    const data = JSON.parse(text) as EmergencyCalmResponse;
    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      message: "We are here with you. Let's take a moment to pause.",
      action: "Close your eyes and take three deep, slow breaths.",
    };
  }
};