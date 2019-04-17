class FuncoesFila{
    constructor(tamArr){
        this.fim = -1;
        this.inicio = -1;
        this.fimPriori = -1;
        this.fimGrave = -1;
        this.qtdAtende = 0;
        this.vetor = new Array(tamArr);
        this.tamArr = tamArr;
    }

    verificaFila(){
        //Verifica se esta vazio.
        if(this.inicio == -1 || (this.inicio > this.fim)){
            return -1;
        }
        //verifica se ha um unico elemento na fila
        if((this.inicio == this.fim) || (this.inicio == this.fimPriori) || (this.inicio == this.fimGrave)){
            return 1;
        }
        //Verifica se esta cheio 
        else if((this.fim == this.tamArr-1) || (this.fimPriori == this.tamArr-1) || (this.fimGrave == this.tamArr-1) || (this.qtdAtende == this.tamArr-1)){
            return 2;
            
        }
        return 4;
        
    }
    

    insereElem(elem){
        let check = this.verificaFila();
        if(check == 2){
            console.log("Fila está cheia");
            return false;
        }else if(check == -1){
            //Significa que esta vazia a necessita de duplo incremento
            if(elem.priori == "N"){
                this.inicio++;
                this.fim++;
                this.vetor[this.fim] = elem;
                console.log("primeiro do primeiro");
                this.qtdAtende++;
                return true;
            }
            else if(elem.priori == "P"){
                this.inicio++;
                this.fimPriori++;
                this.vetor[this.fimPriori] = elem;
                console.log("primeiro do seg");
                this.fim++;
                this.qtdAtende++;
                return true;
            }
            else if(elem.priori == "G"){
                this.inicio++;
                this.fimGrave++;
                this.vetor[this.fimPriori] = elem;
                console.log("primeiro do terceiro");
                this.fim++;
                this.fimPriori++;
                this.qtdAtende++;
                return true;
            } 
            
        }else if(check == 1){
            //Significa que nao esta vazio e nem que esta cheio ha n elementos na fila
            //Oq significa que so os fims sera incrementado
            if(elem.priori == "N"){
                this.fim++;
                this.vetor[this.fim] = elem;
                console.log("segundo do primeiro");
                return true;
            }else if(elem.priori == "P"){
                this.fimPriori++;
                //Pode usar o splice(posicao, numElemRemovidos, elementos a ser acrecentados)
                this.vetor.splice(this.fimPriori, 0, elem);
                console.log("segundo do segundo");
                this.fim++;
                this.vetor.length--;
                return true;

            }else if(elem.priori == "G"){
                this.fimGrave++;
                this.vetor.splice(this.fimGrave, 0, elem);
                console.log("segundo do terceiro");
                this.fimPriori++;
                this.fim++;
                this.vetor.length--;
                return true;
            }
        }
        else if(check == 4){
            //Significa que nao esta vazio e nem que esta cheio ha n elementos na fila
            //Oq significa que so os fims sera incrementado
            if(elem.priori == "N"){
                this.fim++;
                this.vetor[this.fim] = elem;
                console.log("terceiro do primeiro");
                return true;
            }else if(elem.priori == "P"){
                this.fimPriori++;
                //Pode usar o splice(posicao, numElemRemovidos, elementos a ser acrecentados)
                this.vetor.splice(this.fimPriori, 0, elem);
                console.log("terceiro do segundo");
                this.fim++;
                this.vetor.length--;
                return true;

            }else if(elem.priori == "G"){
                this.fimGrave++;
                this.vetor.splice(this.fimGrave, 0, elem);
                console.log("terceiro do terceiro");
                this.fimPriori++;
                this.fim++;
                this.vetor.length--;
                return true;
            }
        }    
    }

    removeElem(){
        let check = this.verificaFila();
        if(check == -1){
            console.log("A Fila está vazia");
            return -1;
        }else if(check == 1){
            let elem = this.vetor[this.inicio];
            console.log('igual');
            this.inicio++;
            return elem;
        }
        else if(check == 4 || 2){
            let elem = this.vetor[this.inicio];
            this.inicio++;
            return elem;
        }
        
    }


    mostra(tipo){
        let check = this.verificaFila();
        if((check == 1) || (check == 2) || (check == 4)){
            if(tipo == 1){
                //Mostra o inicio
                return this.vetor[this.inicio];
            }else if(tipo == 2){
                //mostra o fim
                return this.vetor[this.fim];
            }else if(tipo == 3){
                //mostra o vetor inteiro Easter Egg
                return this.vetor;
            }
        }else if(check == -1){
            //tive que colocar esses returns de -1 para que funcione corretamente as mensagens no menu.js
            return -1;
        }else{
            return -1;
        }

        
    }
}


