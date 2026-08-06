import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "submissions");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const entry = {
      ...body,
      type: "devis",
      receivedAt: new Date().toISOString(),
    };
    await fs.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, `devis-${Date.now()}.json`);
    await fs.writeFile(file, JSON.stringify(entry, null, 2), "utf-8");
    console.log("[ABICOM] Nouvelle demande devis:", body.email, body.product, body.quantity);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
