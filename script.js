class heroi{
    
    constructor(nome,idade,classe){
       this.nome = nome ;
       this.idade = idade;
       const classesvalidas = {
        "Cavaleiro": "Espada",
        "Sacerdote": "Magia",
        "Ladino": "Adaga",
        "Arqueiro": "Flecha",
       };
       if (Object.keys(classesvalidas).includes(classe)){
        this.classe = classe;
        this.arma = classesvalidas[classe];
       }else{
        console.log("***Classe escolhida inválida, por favor escolha uma classe válida -***");
        console.log("*fique atento as letras maiúsculas e minusculas-*");
       }
    }
    atacar() {
        return `O ${this.classe} atacou usando ${this.arma}`
    }
    
}
const thiago = new heroi("Thiago", "22","Ladino")
console.log(thiago.atacar())