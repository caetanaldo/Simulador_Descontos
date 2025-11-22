function Resultado({ valorFinal, mensagem }){

    if(!mensagem) return null;

    let cor = "black"

    if(mensagem.includes("máximo")) cor = "red";
    else if(mensagem.includes("ótimo")) cor = "green";
    else if(mensagem.includes("padrão")) cor = "orange";

    return(
        <div style={{marginTop: "20px"}}>
            {valorFinal && <h2 style={{color: cor}}>Valor final: R$ {valorFinal}</h2>}
            <p>{mensagem}</p>
        </div>
    )
}
export default Resultado