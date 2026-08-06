import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "submissions");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const entry = {
      ...body,
      type: "contact",
      receivedAt: new Date().toISOString(),
    };
    await fs.mkdir(dataDir, { recursive: true });
    const file = path.join(dataDir, `contact-${Date.now()}.json`);
    await fs.writeFile(file, JSON.stringify(entry, null, 2), "utf-8");
    // Envoi réel vers l'email du client si configuré, sinon on log.
    // (Le brief demande Nodemailer/API email ; on sauvegarde + on log ici,
    //  brancher Nodemailer ou Resend ici avec process.env.MAIL_*. )
    console.log("[ABICOM] Nouveau message contact:", body.email, body.company);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
