function EntradaValor({valor, aoDigitar}){

    return(
        <input        
            type="number"
            value={valor}
            onChange={(e)=> aoDigitar(e.target.value)}
            placeholder="Valor da compra"
            style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                width: "200px",
                marginRight: "10px"
            }}
        />
    )
}
export default EntradaValor