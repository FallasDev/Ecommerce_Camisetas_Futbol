import "../styles/buyCar.css";

function Counter({number,substract = () => {},sum = () => {}}){
    return (
        <div className="buy-car-boxStock">
            <button onClick={substract}>-</button>
            <p>{number}</p>
            <button onClick={sum}>+</button>
          </div>
    )
}

export default Counter