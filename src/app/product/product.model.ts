export interface Product {
  id: string;
  price: number;
  itmemdesc: string;
  imagePath: string;
  quantity: {
    type: number,
    default: 1
  };
}
