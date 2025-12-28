export default async (req) => {
  // Netlify runtime here expects a Web Response
  if (req.method === "OPTIONS") {
    return new Response("", {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { message = "" } = await req.json();
    if (!message) {
      return new Response(JSON.stringify({ error: "Missing message" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = Netlify.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

   const data = await r.json();

// Si Gemini renvoie une erreur, on la remonte au front
if (!r.ok) {
  return new Response(JSON.stringify({ error: "Gemini error", details: data }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}

// Extraction robuste (plusieurs formats possibles)
const reply =
  data?.candidates?.[0]?.content?.parts?.map(p => p?.text).filter(Boolean).join("") ||
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  data?.text ||
  "";

return new Response(JSON.stringify({ reply, raw: data }), {
  status: 200,
  headers: { "Content-Type": "application/json" },
});
