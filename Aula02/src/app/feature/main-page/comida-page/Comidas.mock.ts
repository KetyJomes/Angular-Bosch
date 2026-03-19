export interface IComida{
    id: number,
    name: string,
    stock: number,
    value: number,
    restaurant: string
    
}

const MockComidas: IComida[] = [  
    { id: 1, name: "Pizza Margherita", stock: 20, value: 45, restaurant: "Bella Napoli" },
    { id: 2, name: "Hambúrguer Artesanal", stock: 35, value: 28, restaurant: "Burger House" },
    { id: 3, name: "Sushi Combo", stock: 15, value: 60, restaurant: "Sakura Sushi" },
    { id: 4, name: "Salada Caesar", stock: 18, value: 22, restaurant: "Green Bowl" },
    { id: 5, name: "Taco Mexicano", stock: 25, value: 18, restaurant: "El Sombrero" },
    
]

export default MockComidas;