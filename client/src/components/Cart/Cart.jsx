import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs-tinysrab&w=1600%22",
      isNew: true,
      title: "halt",
      desc: "TQQQQQT",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      title: "halt",
      desc: "TQQQQQT",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h2>{item.title}</h2>
                <p>{item?.desc.substring(0,100)}</p>
            </div>
            <div className="price">
                1 x €{item.price}
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>€123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="reset"></div>


    </div>
  );
};

export default Cart;
