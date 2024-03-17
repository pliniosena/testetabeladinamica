

//variaveis

const animaisTerrestres =[];
const animaisAquaticos=[];

const GerarTabela =()=>{
    const tabelaBichos = document.querySelector('#tabelaBichos');
    const tabelaBody = document.createElement('tbody');
    const tabelaHead = document.createElement('thead')
    const tabelaHeadUm = document.createElement('thead');
    const tabelaHeaDois = document.createElement('thead');
  
    tabelaHeadUm.textContent='animais terrestres';
    tabelaHeaDois.textContent='animais aquaticos';

    tabelaHead.appendChild(tabelaHeadUm);
    tabelaHead.appendChild(tabelaHeaDois)

    return{ tabelaBody,tabelaHead,tabelaBichos};

}

const requisicaoFetch =()=>{
 
    fetch('animais.json')
    .then(response=>{
        if(!response.ok){
            throw new Error('Erro ao requisitar dados');
        }
        return response.json();
    })
    .then(dados=>{
      
       const {tabelaBody,tabelaHead,tabelaBichos}= GerarTabela();
        dados.forEach(animal =>{
           
            const linha = document.createElement('tr');
            const colunaUm = document.createElement('td');
            const colunaDois = document.createElement('td');

          
            if(animal.tipo==="terrestre"){
            animaisTerrestres.push(animal.name);
            colunaUm.textContent=animal.name;
            colunaDois.textContent="";
                  
            }else{
                animaisAquaticos.push(animal.name);
                colunaDois.textContent=animal.name;
                colunaUm.textContent="";
            
            } 

            linha.appendChild(colunaUm);
            linha.appendChild(colunaDois);
            tabelaBody.appendChild(linha);

        })
        tabelaBichos.appendChild(tabelaHead);
        tabelaBichos.appendChild(tabelaBody);
    
        
    })
    .catch(error=>{
        alert('erro ao requisitar dados da aplicação',error)
    })

}


requisicaoFetch();
