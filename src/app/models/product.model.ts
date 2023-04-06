export interface Category{
  id: number;
  name: string;
}


export interface Product{
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category:Category;
  taxes?:number;
}

export interface CreateProductDTO extends Omit<Product,'id'| 'category'> {//omitir  id y category ya que el id lo crea la bd y la category ya exite, solo se necesita el id de la category a la que existe el producto
  categoryId:number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO>{ //lo que hace partial es poner un interrogante a cada item para que sean opcionales

}

