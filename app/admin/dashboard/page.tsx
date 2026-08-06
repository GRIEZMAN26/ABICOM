"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";

export default function AdminDashboard() {
  const { t } = useI18n();
  const router = useRouter();
  const [auth, setAuth] = useState<boolean | null>(null);
  const [tab, setTab] = useState<"blog" | "downloads" | "gallery">("blog");
  const [items, setItems] = useState<any[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content?type=blog")
      .then((r) => {
        if (r.status === 401) {
          setAuth(false);
          router.replace("/admin");
          return null;
        }
        setAuth(true);
        return r.json();
      })
      .then((d) => d && setItems(d))
      .catch(() => setAuth(false));
  }, []);

  async function load(type: "blog" | "downloads" | "gallery") {
    setTab(type);
    setBusy(true);
    const d = await (await fetch(`/api/admin/content?type=${type}`)).json();
    setItems(d);
    setBusy(false);
  }

  function update(i: number, field: string, value: any) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, [field]: value } : it)));
  }

  async function save() {
    setBusy(true);
    await fetch(`/api/admin/content?type=${tab}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    setBusy(false);
  }

  function addItem() {
    if (tab === "blog")
      setItems((p) => [
        ...p,
        { slug: `article-${Date.now()}`, title: "", titleEn: "", excerpt: "", excerptEn: "", cover: "/images/products/acide.png", category: "Produits", categoryEn: "Products", date: new Date().toISOString().slice(0, 10), readTime: "3 min", content: "", contentEn: "" },
      ]);
    else if (tab === "downloads")
      setItems((p) => [...p, { slug: `doc-${Date.now()}`, title: "", titleEn: "", description: "", descriptionEn: "", file: "/pdf/", size: "", date: new Date().toISOString().slice(0, 10) }]);
    else
      setItems((p) => [...p, { src: "/images/products/acide.png", alt: "", altEn: "" }]);
  }

  function remove(i: number) {
    setItems((p) => p.filter((_, idx) => idx !== i));
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
  }

  if (auth === null) return <div className="grid min-h-screen place-items-center text-navy">…</div>;
  if (auth === false) return null;

  return (
    <div className="min-h-screen bg-gray-light">
      <header className="flex items-center justify-between bg-navy px-5 py-4 text-white">
        <h1 className="font-heading text-xl font-bold">ABICOM · {t.admin.welcome}</h1>
        <button onClick={logout} className="rounded-full border border-white/30 px-4 py-1.5 text-sm hover:bg-white/10">
          {t.admin.logout}
        </button>
      </header>

      <div className="container-px py-8">
        <div className="mb-6 flex gap-2">
          {(["blog", "downloads", "gallery"] as const).map((tb) => (
            <button
              key={tb}
              onClick={() => load(tb)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === tb ? "bg-orange text-white" : "bg-white text-navy shadow-soft"
              }`}
            >
              {tb === "blog" ? t.admin.manageBlog : tb === "downloads" ? t.admin.manageDownloads : t.admin.manageGallery}
            </button>
          ))}
        </div>

        {busy && <p className="mb-3 text-sm text-text-gray">…</p>}

        <div className="space-y-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl2 bg-white p-4 shadow-soft">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-text-gray">#{i + 1}</span>
                <button onClick={() => remove(i)} className="text-xs font-semibold text-red-600 hover:underline">
                  {t.admin.delete}
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="input" value={it.title ?? ""} placeholder="Titre FR" onChange={(e) => update(i, "title", e.target.value)} />
                <input className="input" value={it.titleEn ?? ""} placeholder="Title EN" onChange={(e) => update(i, "titleEn", e.target.value)} />
                {tab === "blog" && (
                  <>
                    <textarea className="input sm:col-span-2" rows={3} value={it.content ?? ""} placeholder="Contenu FR" onChange={(e) => update(i, "content", e.target.value)} />
                    <textarea className="input sm:col-span-2" rows={3} value={it.contentEn ?? ""} placeholder="Content EN" onChange={(e) => update(i, "contentEn", e.target.value)} />
                  </>
                )}
                {tab === "downloads" && (
                  <>
                    <input className="input" value={it.file ?? ""} placeholder="Chemin fichier /pdf/..." onChange={(e) => update(i, "file", e.target.value)} />
                    <input className="input" value={it.size ?? ""} placeholder="Taille" onChange={(e) => update(i, "size", e.target.value)} />
                  </>
                )}
                {tab === "gallery" && (
                  <>
                    <input className="input" value={it.src ?? ""} placeholder="/images/..." onChange={(e) => update(i, "src", e.target.value)} />
                    <input className="input" value={it.alt ?? ""} placeholder="Alt FR" onChange={(e) => update(i, "alt", e.target.value)} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={addItem} className="btn-secondary text-sm">{t.admin.add}</button>
          <button onClick={save} disabled={busy} className="btn-primary text-sm">{t.admin.save}</button>
        </div>
      </div>
    </div>
  );
}
