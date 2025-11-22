function BotaoCalcular({ aoClicar }){

    return(
        <button
            onClick={aoClicar}
            style={{
                padding: "10px 20px",
                backgroundColor: "#2196f3",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
            }}
        >
            
        </button>
    )
}
export default BotaoCalcular