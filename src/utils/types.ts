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
