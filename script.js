

var hora = new Date().getHours();

if (hora <12){
    document.getElementById("horas").innerHTML = "Bom dia! Bem-vindo ao meu portfólio.";
}else if (hora <18){
    document.getElementById("horas").innerHTML = "Boa tarde! Bem-vindo ao meu portfólio.";
} else {
    document.getElementById("horas").innerHTML = "Boa noite! Bem-vindo ao meu portfólio.";
}
