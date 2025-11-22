import { useState } from "react";
import EntradaValor from "../componentes/EntradaValor";
import SeletorCliente from "../componentes/SeletorCliente";
import BotaoCalcular from "../componentes/BotaoCalcular";
import Resultado from "../componentes/Resultado";

function SimuladorDescontos(){

    const [valor, setValor] = useState("");
    const [tipoCliente, setTipoCliente] = useState("");
    const [valorFinal, setValorFinal] = useState(null);
    const [mensagem, setMensagem] = useState("");

    const calcularDesconto = ()=>{

        const preco = parseFloat(valor);

        if(isNaN(preco) || preco <= 0){

            setMensagem("Digite um valor de compra válido!");
            setValorFinal(null);
            return
        }

        let desconto = 0;

        // CASE define o desconto conforme o tipo de cliente
        switch(tipoCliente){
            case "vip":
                desconto = 0.2;
                break

            case "funcionario":
                desconto = 0.3;
                break

            case "parceiro":
                desconto = 0.15;
                break

            case "comum":
                desconto = 0.05;
                break

            default:
                setMensagem("Selecione o tipo de cliente!");
                return;
        }

        const valorComDesconto = preco - preco * desconto;
        setValorFinal(valorComDesconto.toFixed(2));

        // CONDICIONAL ANINHADA

        if(desconto >= 0.3){
            setMensagem("Desconto máximo aplicado! Aproveite o benefício interno")

        }else if(desconto >= 0.15){
            setMensagem("Você recebeu um ótimo desconto!")

        }else{
            if(desconto === 0.05){
                setMensagem("Cliente comum - desconto padrão aplicado")

            }else{
                setMensagem("Tipo de cliente não elegível para desconto")
            }
        }
    }

    return(
        <div style={{textAlign: "center", marginTop: "40px"}}>
            
            <h1>Simulador de Descontos</h1>
            <EntradaValor valor={valor} aoDigitar={setValor} />
            <SeletorCliente tipo={tipoCliente} aoSelecionar={setTipoCliente}/>
            <BotaoCalcular aoClicar={calcularDesconto} />
            <Resultado valorFinal={valorFinal} mensagem={mensagem} />

        </div>
    )
}
export default SimuladorDescontos;