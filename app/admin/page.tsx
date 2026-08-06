"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";

export default function AdminLogin() {
  const { t } = useI18n();
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
    if (res.ok) router.push("/admin/dashboard");
    else setErr(true);
  }

  return (
    <section className="gradient-navy flex min-h-screen items-center justify-center px-5">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-xl2 bg-white p-8 shadow-soft">
        <h1 className="font-heading text-2xl font-extrabold text-navy">{t.admin.title}</h1>
        {err && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{t.admin.wrong}</p>}
        <label className="mt-5 block text-sm font-semibold text-navy">{t.admin.user}</label>
        <input value={login} onChange={(e) => setLogin(e.target.value)} className="input mt-1" required />
        <label className="mt-4 block text-sm font-semibold text-navy">{t.admin.password}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input mt-1" required />
        <button type="submit" className="btn-primary mt-6 w-full">{t.admin.login}</button>
      </form>
    </section>
  );
}
