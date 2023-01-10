import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios"

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
  //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs-tinysrab&w=1600%22",
  //     isNew: true,
  //     title: "halt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
  //     title: "halt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
  //     title: "halt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinysrab&w=1600",
  //     title: "halt",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
          headers : {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN
          }
        })
        setData(res.data.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  },[])


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          consequatur fugiat inventore iste at corrupti commodi veritatis veniam
          animi itaque est nesciunt tempora! Maiores et ex laborum aut cum
          beatae!
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
