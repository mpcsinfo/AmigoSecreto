//Programa para sortear Amigo Secreto
//Desenvolvido por Marcelo José Pereira
//15/03/2025

//Declaraçao das variáveis
let amigos = [];

//Funcao para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        input.value = '';
        atualizarListaAmigos();
    } else {
        alert('Por favor, insira um nome válido ou que ainda não foi adicionado.');
    }
}

//Funcao para autalizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

//Funçao para sortear Amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;

    // Remove o amigo sorteado da lista para evitar repetição
    amigos = amigos.filter(amigo => amigo !== sorteado);
    atualizarListaAmigos();
}

//Fim do programa