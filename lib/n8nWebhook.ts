import { DevisFormData } from "./validations";

export async function sendToN8n(data: DevisFormData) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes("PLACEHOLDER")) {
    console.log("[DEV] Webhook URL not configured, simulating success");
    console.log("[DEV] Payload:", JSON.stringify(data, null, 2));
    return { success: true };
  }

  const payload = {
    ...data,
    source: "site-synaplink",
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook error: ${response.status}`);
  }

  return { success: true };
}
