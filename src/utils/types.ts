export interface IDBUser {
  id: string;
  pesel: string;
  name: string;
  surname: string;
  email: string;
  phone_number?: string;
  description?: string;
  note?: string;
  created_at?: string;
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
