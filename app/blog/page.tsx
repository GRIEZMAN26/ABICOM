import { redirect } from "next/navigation";

/** L'ancienne page Blog est remplacée par le département La Jardinière. */
export default function BlogRedirect() {
  redirect("/la-jardiniere");
}
