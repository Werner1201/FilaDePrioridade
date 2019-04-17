let Fila = new FuncoesFila(50); 


/*
essas funcoes de addText funcionam com essas tags
<form name="myform">
        <textarea name="inputtext"></textarea>
    </form> */


function addtext(string) {
	let newtext = string;
    const textoArea = document.myform.inputtext;
    textoArea.value += newtext; 
    textoArea.scrollTop = textoArea.scrollHeight;
}

function cleantext() {
    const textoArea = document.myform.inputtext;
    textoArea.value += ""; 
    textoArea.scrollTop = textoArea.scrollHeight;
}


function triagemPaci(){
    let nome = window.prompt("Digite o Primeiro Nome do Paciente: ");
    let sobrenome = window.prompt("Digite o sobrenome do Paciente: ");
    let priori = window.prompt("Digite a prioridade do Paciente: <N - Normal, P - Prioritario, G - Grave>");
    let paciente = new Paciente(nome, sobrenome, priori);
    return paciente;
}

function escolhaOpt(){
    let esc = parseInt(window.prompt("Cadastrar Paciente<1>, Atendender Paciente<2>, Mostrar Fila<3>, Sair<4>"));
    return esc;
}

function sair(){
    let resp = parseInt(window.prompt("Deseja realizar outra operação ?<S:1><N:0>"));
    let control = (resp == 1) ? true : false;
    return control;
}

function escolhaMostrar(){
    let mostra = parseInt(window.prompt("Mostrar primeiro da Fila<1>, Mostrar o Fim<2>"));
    return mostra;
}

function menu(){
    let opt = true;
    do{
        switch(escolhaOpt()){
            case 1: let rep = (Fila.insereElem(triagemPaci()) == true) ? "O paciente foi adcionado com sucesso": "A fila está cheia"; 
                    addtext(`\n${rep}`);
            break;
            case 2:let elem = Fila.removeElem();
                    let chama = (elem == -1) ? `\nFila está vazia`: `\nPaciente: ${elem.nome} ${elem.sobrenome} é chamado para o atendimento`; 
                    addtext(chama);
            break;
            case 3:
            let escolha = escolhaMostrar();
            let retorno = Fila.mostra(escolha);
            let msg;
            if(retorno == -1 || retorno == undefined){
                msg = "A Fila esta Vazia"
            }else{
                if(escolha == 1){
                    msg = `${retorno.nome} ${retorno.sobrenome} é o primeiro da Fila`;
                }else if(escolha == 2){
                    msg = `${retorno.nome} ${retorno.sobrenome} é o ultimo da Fila`;
                }else if(escolha == 3){
                    let result = ""; 
                        let aux = Object.values(retorno);
                    for (let i = 0; i < aux.length; i++) {
                        result = result + `{nome: ${aux[i].nome}, sobrenome: ${aux[i].sobrenome}, prioridade: ${aux[i].priori}}, `;
                    }
                msg = `[${result}]`;
                }
            }
            addtext(`\n${msg}`); break;
            case 4: opt = false;
        }
        if(opt == true){
            opt = sair();   
        }     
    }while(opt)
}


document.addEventListener('DOMContentLoaded', function() {
    menu();
 }, false);