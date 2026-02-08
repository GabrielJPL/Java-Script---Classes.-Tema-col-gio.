class Ficheiro_do_Aluno {
    constructor(){
        this.nota_do_aluno = 7;
        this.nome = "Gabriel";
        this.idade = 18;
        this.aluno_ausente = true;
    }
    
    CALCULAR_NOTA_E_PRESENÇA_E_FICHA_DO_ALUNO() {

    console.log(`
Ficha do/a aluno/a:
nome : ${this.nome}
idade: ${this.idade}
nota: ${this.nota_do_aluno}
    `); 
    if (this.aluno_ausente === false){
        console.log("Tudo em ordem.");
    }
    if (this.aluno_ausente === true) {
        this.nota_do_aluno = this.nota_do_aluno - 3
    
    console.log(`
    ALERTA!!
                            
Suas faltas resultaram na redução de seus pontos. Uma penalidade de 3 pontos. Pontos agora: ${this.nota_do_aluno}
recomendável fazer recuperação
     `);
    
    console.log("Sua nota: " + this.nota_do_aluno);
    const nota_necessaria = 7;
    console.log("Nota necessaria: " + nota_necessaria);

    let situacao = "Reprovado";
    console.log(situacao);

     }
}
    RECUPERAÇÃO(){
        this.notaDaRec = 5;

        if (this.notaDaRec >= 5 && this.aluno_ausente === true){
            console.log(`Passou na recuperação com: ${this.notaDaRec}`);
        }
        if (this.notaDaRec < 5 && this.aluno_ausente === true){
            console.log(`Não passou na recuperação. Nota: ${this.notaDaRec}`);
        }    
    }

    Passou(){
        if (this.nota_do_aluno >= 7 && this.aluno_ausente === false){
            console.log(`Passou de ano com: ${this.nota_do_aluno}`);
        }
    }
}

const Exibir1 = new Ficheiro_do_Aluno();
Exibir1.CALCULAR_NOTA_E_PRESENÇA_E_FICHA_DO_ALUNO();
Exibir1.RECUPERAÇÃO();
Exibir1.Passou();