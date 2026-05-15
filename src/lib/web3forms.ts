const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export interface Web3FormsData {
  subject?: string;
  [key: string]: string | undefined;
}

export async function submitToWeb3Forms(data: Web3FormsData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    throw new Error("Clé Web3Forms manquante. Configurez VITE_WEB3FORMS_KEY dans .env");
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("from_name", "Site GBUSS");

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) formData.append(key, value);
  }

  const res = await fetch(WEB3FORMS_URL, { method: "POST", body: formData });
  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Erreur lors de l'envoi du formulaire");
  }
}
