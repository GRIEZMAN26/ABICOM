import { redirect } from "next/navigation";

/**
 * L'ancienne page Galerie est remplacée par le département Visa & Assistance.
 * Redirection permanente pour éviter les liens cassés.
 */
export default function GalleryRedirect() {
  redirect("/visa-assistance");
}
