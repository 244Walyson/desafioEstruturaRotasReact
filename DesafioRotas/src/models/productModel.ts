import { category } from "./categoryModel";

export class product {
    id: number;
    name: string;
    category: category[]

    constructor(id: number, name: string, category: category[]){
        this.id = id;
        this.name = name;
        this.category = category;
    }
}