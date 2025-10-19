export async function handler(event, context) {
  const data = JSON.parse(event.body);

  // For demo: log into Netlify function logs
  console.log("User consent:", data.choice);

  // Here you could also push to a DB, Google Sheet, etc.
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Consent logged" }),
  };
}