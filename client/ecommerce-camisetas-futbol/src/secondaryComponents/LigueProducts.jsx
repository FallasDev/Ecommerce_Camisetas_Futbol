function LigueProducts({products}){
    return (
        <div>
            <ul>
                {(products) ? products.map((item,index) => 
                    {
                        return (item.Frente) && <li key={index}>
                        <img src={item.Frente} alt="Camiseta equipo de futbol" />
                        <h1>{item.Nombre}</h1>
                        </li>
                    }
                    
                ): <h1>Wait</h1>}
            </ul>
        </div>
    )
}

export default LigueProducts;