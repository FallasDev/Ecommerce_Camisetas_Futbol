import { useContext, useEffect, useState } from "react";
import { context, shirtData, setDataShirt } from "../ContextApp";
import trashIcon from "../assets/icons8-basura.gif";
import "../styles/buyCar.css";

function ProductBuyCar() {
  const [data, setData] = useState(shirtData);
  const { changePrice, setChangePrice } = useContext(context);

  useEffect(() => {
    setChangePrice(data)
  },[])

  const sumStock = (stock) => {
    const newData = data.map((item) => {
      if (stock.name === item.name && item.showing !== false) {
        return {
          ...item,
          stock: item.stock + 1,
        };
      }
      return item;
    });
    setData(newData);
    setChangePrice(newData);
    setDataShirt(newData);
  };

  const subtractStock = (stock) => {
    const newData = data.map((item) => {
      if (stock.name === item.name && item.stock > 0 && item.showing !== false) {
        return {
          ...item,
          stock: item.stock - 1,
        };
      }
      return item;
    });
    setData(newData);
    setChangePrice(newData);
    setDataShirt(newData)
  };

  const deleteShirt = (element) => {
    const newData = data.filter((item) => item.name !== element.name);
    changeShowing(element);
    setData(newData);
    setDataShirt(newData);
    setChangePrice(newData);
  };

  const changeShowing = (element) => {
    const newData = data.map((item) => ({
      ...item,
      showing: item.name === element.name && !item.showing,
    }));
    setData(newData);
    setChangePrice(newData);
    setDataShirt(newData);
  };

  

  return (
    <ul className="buy-car-ul">
      {data.map((item, index) => (
        <li key={index}>
          <img className="buy-car-imgShirt" src={item.src} alt="Camiseta Equipo" />
          <h4 className="buy-car-ShirtName">{item.name}</h4>
          <span className="buy-car-shirtPrice">${item.price}</span>
          <div className="buy-car-boxStock">
            <button onClick={() => subtractStock(item)}>-</button>
            <p>{item.stock}</p>
            <button onClick={() => sumStock(item)}>+</button>
          </div>
          <button className="buy-car-trashButton" onClick={() => deleteShirt(item)}>
            <img src={trashIcon} alt="Eliminar" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductBuyCar;
