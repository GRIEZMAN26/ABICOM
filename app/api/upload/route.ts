import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (req.cookies.get("abicom_admin")?.value !== "1")
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "no file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const safeName = file.name.replace(/\s+/g, "-");
  const outDir = path.join(process.cwd(), "public", "pdf");
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, safeName), Buffer.from(bytes));
  return NextResponse.json({ ok: true, file: `/pdf/${safeName}` });
}
