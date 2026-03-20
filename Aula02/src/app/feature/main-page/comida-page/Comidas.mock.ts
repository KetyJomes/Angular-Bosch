export interface IComida{
    id: number,
    name: string,
    value: number,
    establishment: string,
    imagen: string,
    
}

const MockComidas: IComida[] = [  
    { id: 1, name: "Pizza Margherita", value: 45, establishment: "Bella Napoli", imagen: "assets/pizza-marguerita.jpg" },
    { id: 2, name: "Hambúrguer Artesanal", value: 28, establishment: "Burger House", imagen: "assets/hamburger_artesanal.jpg" },
    { id: 3, name: "Sushi Combo", value: 60, establishment: "Sakura Sushi", imagen: "assets/sushi.webp" },
    { id: 4, name: "Salada Caesar", value: 22, establishment: "Green Bowl", imagen: "assets/salada.jpg" },
    { id: 5, name: "Taco Mexicano", value: 18, establishment: "El Sombrero", imagen: "assets/taco.jpg" },
    { id: 6, name: "Frango Grelhado", value: 32, establishment: "Grill Master", imagen: "assets/bife-de-frango-grelhado.jpeg" },
    { id: 7, name: "Pad Thai", value: 40, establishment: "Thai Express", imagen: "assets/pad.jpg" },
    { id: 8, name: "Churrasco Misto", value: 55, establishment: "Brasa Gaúcha", imagen: "assets/churrasco.jpg" },
]

export default MockComidas;