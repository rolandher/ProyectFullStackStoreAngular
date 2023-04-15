export interface NewProductModel {
  id_Store: number;
  names: string;
  description: string;
  stock: number;
  price: string;
  admissionDate: Date;
  departureDate: Date;
  state : boolean;
}
