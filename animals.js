class Animals{
    constructor(options){
        this.rasa = options.rasa;
        this.culoare = options.culoare;
        this.varsta = options.varsta;
        this.infom = options.infom;
        this.energ = options.energ;
        this.oboseala = options.oboseala;
    }
    mananca(){
        if (this.infom < 7) {
            console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Mananca');
        }
        else{
            console.log('Animalul nu este flamand');
            }
    }
    semisca(){
        if(this.energ > 6){
           console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Se misca');
        }
        else{
            console.log(this.rasa + ' ' + 'trebuie sa doarma');
        }
    }
     doarme(){
        if (this.oboseala > 5 ) {
            console.log(this.rasa + ' ' + this.culoare + ' ' + 'cu varsta de' + ' ' + this.varsta + ' ' + 'Doarme');
        }
        else{
            console.log(this.rasa + ' ' + 'are destula energie pentru a se mai misca');
        }
    }
}

let animal = new Animals({
    rasa: 'Tigrul',
    culoare: 'Alb',
    varsta: '10 ani',
    infom: 5,
    energ: 7,
    oboseala: 4
});
//animalul mananca
animal.mananca();
//animalul se misca
animal.semisca();
//animalul doarme
animal.doarme();
