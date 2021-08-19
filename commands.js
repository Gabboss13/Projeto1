function selecionar1 () {
    var car1 = confirm ("Quem precisa de GPS quando pode guiar sua vida pelas estrelas? Laura, a Astróloga! descobriu um novo lugar seguro, topa ir com ela? ")
    
   if (car1 == true) { 
       location.href= "./miguelina/miguelina.html"}
   
    else {
        location.href ="personagens.html" 
    } 
}

function selecionar2 () {
    var car2 = confirm ("Então, Adão está determinado a descobrir quem orquestrou essa catástrofe. Você vai com ele mesmo assim? (Spoiler: Adão, o Historiador! tem certeza que foram os Estados Unidos!! ")
    
    if (car2==true) {
        location.href= "./adao/adao.html"}

    else {
        location.href ="personagens.html" 
    }
}


function selecionar3 () {
    var car = confirm ("Ali, o Filósofo! quer derrubar o regime autoritário. Beleza? Pelo menos a missão não é a busca pela Verdade, ou seria um looping infinito, né? Disclaimer: Esse persongem é uma cortesia de João Freire!")
    
    if (car == true) {
        location.href= "./ali/ali.html"}

    else {
        location.href ="personagens.html" 
    }
}

