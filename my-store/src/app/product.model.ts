export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; // ! asi se hace un parametro opcional que puede o no estar en todos los elementos del objeto
}
