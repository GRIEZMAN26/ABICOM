import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "content", "data");

export async function GET(req: NextRequest) {
  if (req.cookies.get("abicom_admin")?.value !== "1")
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const type = req.nextUrl.searchParams.get("type") || "blog";
  try {
    const raw = await fs.readFile(path.join(dataDir, `${type}.json`), "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(req: NextRequest) {
  if (req.cookies.get("abicom_admin")?.value !== "1")
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const type = req.nextUrl.searchParams.get("type") || "blog";
  const data = await req.json();
  await fs.writeFile(path.join(dataDir, `${type}.json`), JSON.stringify(data, null, 2), "utf-8");
  return NextResponse.json({ ok: true });
}
