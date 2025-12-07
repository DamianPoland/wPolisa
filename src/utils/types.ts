export interface IDBUser {
  id: string;
  pesel: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  description: string;
  variant: string;
  note: string;
  created_at: string;
  history: string;
  privacy_consent: boolean;
  marketing_consent: boolean;
}

export type MenuItem = {
  id: number;
  href: string;
  title: string;
};

export enum Icon {
  DARK = "dark",
  LIGHT = "light",
}
