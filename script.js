let lista =[
  {
"nome":"Penne",
"valor":"R$22,00",
"description" : "Delicioso macarrão "
},
  {
"nome":"Burguer com batata frita",
"valor" : "R$18,00",
"description" : "Super Burger"
},
  {
"nome":"Sucos",
"valor":"R$6,90",
"description":"Todos os sabores "
},
  {
"nome": "Bolo",
"valor":"R$25,00",
"description":"Bolos caseiros "
},
  {
"nome": "Hot dog",
"valor":"R$7,00",
"description":"Hot dog completo"
},
  {
"nome": "Pizza",
"valor":"R$15,00",
"description":"Doce ou Salgada "

},

];

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
search(null);

// console.log(lista[2]);
 
 function remover(item) {
   console.log(item);
 }

function search(value) {
  let html='';
  nome=document.getElementById("termo").value;

  lista.forEach( (item) => {
    if (item.nome.toLowerCase().includes(nome.toLowerCase())) {

      html +='<div class="card" style="width: 18rem;">';
      html +='<div class="card-body">';
      html +='<h5 class="card-title">'+item.nome+'</h5>';
      html +='<h6 class="card-subtitle mb-2 text-muted">';
      html +='Valor:'+item.valor+'</h6>';
      html +='<p class="card-text">'+item.description;
      html +='</p>';
      html +='<a href="#" onclick="remover(item.nome)+" class="card-link">Remover</a>';
      html +='<a href="#" class="card-link">Another link</a>';
      html +='</div>';
      html +='</div> <br>';

    }
    
  });
  document.getElementById("resultado").innerHTML = html;

}


 


  