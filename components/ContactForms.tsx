"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { products } from "@/content/products";

export default function ContactForms() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function submit(form: "contact" | "devis", e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch(`/api/${form}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Contact */}
      <form onSubmit={(e) => submit("contact", e)} className="card border border-gray-light">
        <h3 className="font-heading text-xl font-bold text-navy">{t.contact.formTitle}</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input required name="firstName" placeholder={t.contact.firstName} className="input" />
          <input required name="lastName" placeholder={t.contact.lastName} className="input" />
          <input required type="email" name="email" placeholder={t.contact.email} className="input" />
          <input name="phone" placeholder={t.contact.phone} className="input" />
          <input name="company" placeholder={t.contact.company} className="input sm:col-span-2" />
          <textarea required name="message" placeholder={t.contact.message} rows={4} className="input sm:col-span-2" />
        </div>
        <button type="submit" className="btn-primary mt-4 w-full">{t.contact.send}</button>
      </form>

      {/* Devis */}
      <form onSubmit={(e) => submit("devis", e)} className="card border border-gray-light">
        <h3 className="font-heading text-xl font-bold text-navy">{t.contact.quoteTitle}</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input required name="firstName" placeholder={t.contact.firstName} className="input" />
          <input required name="lastName" placeholder={t.contact.lastName} className="input" />
          <input required type="email" name="email" placeholder={t.contact.email} className="input" />
          <input name="phone" placeholder={t.contact.phone} className="input" />
          <input name="company" placeholder={t.contact.company} className="input sm:col-span-2" />
          <select required name="product" className="input sm:col-span-2">
            <option value="">{t.contact.product}</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>{p.name} {p.formula ?? ""}</option>
            ))}
          </select>
          <input name="quantity" placeholder={t.contact.quantity} className="input" />
          <input name="deadline" placeholder={t.contact.deadline} className="input" />
          <textarea required name="message" placeholder={t.contact.message} rows={3} className="input sm:col-span-2" />
        </div>
        <button type="submit" className="btn-primary mt-4 w-full">{t.contact.send}</button>
      </form>

      {status === "ok" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 lg:col-span-2">
          {t.contact.success}
        </p>
      )}
      {status === "err" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 lg:col-span-2">
          {t.contact.error}
        </p>
      )}
    </div>
  );
}
