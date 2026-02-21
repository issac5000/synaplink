import { NextRequest, NextResponse } from "next/server";
import { devisSchema } from "@/lib/validations";
import { sendToN8n } from "@/lib/n8nWebhook";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = devisSchema.parse(body);

    await sendToN8n(validated);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Données invalides", details: error },
        { status: 400 }
      );
    }

    console.error("Devis API error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
