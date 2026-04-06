document.getElementById("formInscricao")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const cpf = document.getElementById("cpf").value;

    localStorage.setItem("cpf", cpf);

    alert("Inscrição realizada com sucesso!")
});

function consultarStatus(){
    const cpf = document.getElementById("cpfConsulta").value;
    const resultado = document.getElementById("resultado");

    if (!cpf) {
        resultado.innerText = "Digite um CPF válido.";
        return;
    }

    const ultimoDigito = parseInt(cpf.slice(-1));

    if (ultimoDigito % 2 === 0){
        resultado.innerText = "Status: Aprovado ✅";
    }else {
        resultado.innerText = "Status: Lista de espera ⏳";
    }
}