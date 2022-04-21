export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;    // ? Este es un valor opcional por eso el ? antes de la declaracion
}
