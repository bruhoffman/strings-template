//EXERCÍCIO PRÁTICA 1
/* function imprimirPessoa() {
    const nome = prompt("Qual o teu nome?");
    const corPreferida = prompt("E qual a sua cor favorita?");
    console.log("A cor favorita de", nome, "é", corPreferida, ".");
}

function imprimirPessoaConcatenação() {
    const nome = prompt("Qual o teu nome?");
    const corPreferida = prompt("E qual a sua cor favorita?");
    console.log("A cor favorita de " + nome + " é " + corPreferida + ".");
}


function imprimirPessoaTemplate() {
    const nome = prompt("Qual o teu nome?");
    const corPreferida = prompt("E qual a sua cor favorita?");
    console.log(`A cor favorita de ${nome} é ${corPreferida}.`);
}

imprimirPessoa();
imprimirPessoaConcatenação();
imprimirPessoaTemplate(); */

//EXERCÍCIO PRÁTICA 2
/* function imprimirPessoa() {
    const nome = prompt("Qual o teu nome?");
    const corPreferida = prompt("E qual a sua cor favorita?");
    const citacao = prompt("Cite uma frase favorita:");

    console.log(`"${citacao}"`)
    console.log(`Nome: ${nome} \nCor preferida: ${corPreferida}`);
}

imprimirPessoa(); */

//EXERCÍCIO PRÁTICA 3
/* function imprimirPessoa() {
    const nome = prompt("Qual o teu nome?");
    console.log(nome.toUpperCase());
    console.log(`O nome ${nome} possui ${nome.length} letras.`);
    console.log(`O nome ${nome} possui a letra "a"? ${nome.includes("a")}`);
}

imprimirPessoa(); */

//EXERCÍCIO PRÁTICA EXTRA
function cadastrarUsuario() {
    const usuario = prompt("Digite o seu nome.");
    const email = prompt("Digite o teu e-mail.");
    let frase = `O e-mail ${email} foi cadastrado com sucesso. \nBoas vindas, ${usuario}! \nO nome ${usuario} possui ${usuario.length} caracteres.`
    console.log(frase);
    console.log(frase.replaceAll("r", "x"));
    console.log(`O e-mail cadastrado possui o "@"? ${email.includes("@")}`);
}

cadastrarUsuario()