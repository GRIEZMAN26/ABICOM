import { redirect } from "next/navigation";

/** Les anciens articles Blog renvoient vers La Jardinière. */
export default function BlogArticleRedirect() {
  redirect("/la-jardiniere");
}
