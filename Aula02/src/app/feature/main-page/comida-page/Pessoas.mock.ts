export interface IPessoa{
    name: string,
    email: string,
    document?: string,
    telefone?: string
}

const MockPessoas: IPessoa[] = [
    {
        email:"ketlyn@gmail.com",
        name: "Ketlyn Jomes",
        document: "1111111111"
    },
    {
        email:"sofia@gmail.com",
        name: "Sofia Jomes",
        document: "2222222222"
    }
]

export default MockPessoas;