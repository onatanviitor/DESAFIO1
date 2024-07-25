// Definindo a variável para guarda o nome e a quantidade da xp do campeão hehe
let nomeCampeao = " Annie ";
let xpCampeao = 7688;

// Variável para guardar o nível do campeão
let nivel = "";

// A Estrutura de decisão para determinar o nível com base na quantidade de xp
if (nomeCampeao.xpCampeao < 1000) {
    nivel = "Ferro";
} else if (nomeCampeao.xpCampeao <= 2000) {
    nivel = "Bronze";
} else if (nomeCampeao.xpCampeao <= 5000) {
    nivel = "Prata";
} else if (nomeCampeao.xpCampeao <= 7000) {
    nivel = "Ouro";
} else if (nomeCampeao.xpCampeao <= 8000) {
    nivel = "Platina";
} else if (nomeCampeao.xpCampeao <= 9000) {
    nivel = "Ascendente";
} else if (nomeCampeao.xpCampeao <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Imprimindo ou exibindo a menssagem final
console.log(" A campeã " + nomeCampeao + " está no nível: " + nivel);