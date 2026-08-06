import { NextRequest, NextResponse } from "next/server";
import { site } from "@/content/site";

export async function POST(req: NextRequest) {
  const { login, password } = await req.json();
  if (login === site.admin.login && password === site.admin.password) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("abicom_admin", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return res;
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
