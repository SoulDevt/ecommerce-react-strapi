import React from "react";
import Card from "../Card/Card";
import "../List/List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs-tinysrab&w=1600%22",
      isNew: true,
      title: "halt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      title: "halt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      title: "halt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
      title: "halt",
      oldPrice: 19,
      price: 12,
    },
  ];
  return <div className="list">
    {/* {data?.map(item => (
    <Card item={item} key={item.id} /> */}
  ))}</div>;
};

export default List;
