export async function POST(req: Request) {
  const { messages } = await req.json();
  const question = messages[messages.length - 1].content;

  const response = await fetch("http://167.99.216.45:8000/ask", {
    method: "POST",
    body: new URLSearchParams({ query: question }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const data = await response.json();
  return new Response(
    JSON.stringify({ role: "assistant", content: data.answer }),
    { status: 200 }
  );
}
