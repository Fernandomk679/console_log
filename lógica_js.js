const nome = "escudo" + "espada" + "pergaminho";
const quantidade = 1 + 2 + 2;

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
    { nome: 'pergaminho', quantidade: 3 }
];

let item = inventario.find(item => item.nome === nome);

if (item && item.quantidade >= quantidade) {
    console.log("Disponível");
} else {
    console.log("Indisponível");
}
