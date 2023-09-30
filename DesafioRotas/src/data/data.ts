import { category } from "../models/categoryModel"
import { product } from "../models/productModel"

const products: product[] = [
    {
        id: 1,
        name: "computador 1",
        category: [
            {
                id: 1,
                name: "computadores",
                route: "computers"
            }
        ]
    },
    {
        id: 2,
        name: "computador 2",
        category: [
            {
                id: 1,
                name: "computadores",
                route: "computers"
            }
        ]
    },
    {
        id: 3,
        name: "computador 3",
        category: [
            {
                id: 1,
                name: "computadores",
                route: "computers"
            }
        ]
    },
    {
        id: 4,
        name: "Eletrônico 1",
        category: [
            {
                id: 2,
                name: "Eletrônico",
                route: "eletronics"
            }
        ]
    },
    {
        id: 5,
        name: "Eletrônico 2",
        category: [
            {
                id: 2,
                name: "Eletrônico",
                route: "eletronics"
            }
        ]
    },{
        id: 6,
        name: "Eletrônico 3",
        category: [
            {
                id: 2,
                name: "Eletrônico",
                route: "eletronics"
            }
        ]
    },
    {
        id: 7,
        name: "Livro 1",
        category: [
            {
                id: 3,
                name: "Livros",
                route: "books"
            }
        ]
    },
    {
        id: 8,
        name: "Livro 2",
        category: [
            {
                id: 3,
                name: "Livros",
                route: "books"
            }
        ]
    },
    {
        id: 9,
        name: "Livro 3",
        category: [
            {
                id: 3,
                name: "Livros",
                route: "books"
            }
        ]
    },

]

export function findAll(): product[]{
    return products
}
export function findByCategory(route: string): Product[] {
    return products.filter((product: Product) => {
        return product.category.some((cat: Category) => cat.route === route);
    });
}
export function findAllCategories(): Category[] {
    let categories: Category[] = [];

    products.forEach((product: Product) => {
        product.category.forEach((cat: Category) => {
            const existingCategory = categories.find((c) => c.id === cat.id);

            if (!existingCategory) {
                categories.push(cat);
            }
        });
    });

    return categories;
}






