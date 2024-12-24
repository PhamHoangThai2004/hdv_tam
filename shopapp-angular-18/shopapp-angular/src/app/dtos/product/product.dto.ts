export class ProductDTO {
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    category_id: number;

    constructor(data: any) {
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.thumbnail = data.thumbnail;
        this.category_id = data.category_id;
      }
  }