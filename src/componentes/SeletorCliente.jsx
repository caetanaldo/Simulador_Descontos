function SeletorCliente({tipo, aoSelecionar}){

    return(

        <select
            value={tipo}
            onChange={(e)=>aoSelecionar(e.target.value)}
            style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginRight: "10px"
            }}
        >
            <option>Selecione o tipo de cliente</option>

            <option value="vip">Vip</option>

            <option value="funcionario">Funcionário</option>

            <option value="parceiro">Parceiro</option>

            <option value="comum">Comum</option>

        </select>

    )
}
export default SeletorCliente