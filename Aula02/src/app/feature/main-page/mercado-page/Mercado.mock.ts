export interface IMercado{
    id: number,
    establishment: string,
    product: string,
    stock: number,
    value: number,
    imagen: string,
    
}

const MockMercados: IMercado[] = [  
  { id: 1, establishment: "Super Compras", product: "Arroz 5kg", stock: 50, value: 30, imagen: "assets/arroz.jpg" },
  { id: 2, establishment: "Mercado Econômico", product: "Feijão Preto 1kg", stock: 40, value: 9, imagen: "assets/feijão.webp" },
  { id: 3, establishment: "Atacado Brasil", product: "Macarrão Espaguete", stock: 60, value: 6, imagen: "assets/macarrao.png" },
  { id: 4, establishment: "Super Compras", product: "Açúcar Refinado 1kg", stock: 45, value: 5, imagen: "assets/Acucar-Refinado.webp" },
  { id: 5, establishment: "Mercado Econômico", product: "Café 500g", stock: 35, value: 14, imagen: "assets/cafe.jpeg" },
  { id: 6, establishment: "Atacado Brasil", product: "Leite Integral 1L", stock: 70, value: 5, imagen: "assets/leite.webp" },
  { id: 7, establishment: "Super Compras", product: "Óleo de Soja 900ml", stock: 55, value: 7, imagen: "assets/oleo-de-soja.webp" },
  { id: 8, establishment: "Mercado Econômico", product: "Farinha de Trigo 1kg", stock: 30, value: 6, imagen: "assets/farinha.jpg" }
]

export default MockMercados;