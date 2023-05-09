import axios from "axios";
import { useState, useEffect, React } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
// import './Product.css';

function Product() {
  const [data, setData] = useState([]);
  // const [cartItems, setCartItems] = useState([]); // define cartItems here

  useEffect(() => {
    axios
      .get("http://localhost:5000/fetch")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, []); // add empty dependency array to run useEffect only once

  const handleAddToCart =async (item) => {
    const datas = await localStorage.getItem('Cart')
    if(datas==null){
      await localStorage.setItem("Cart",JSON.stringify([item]))
    }else{
      const data=await localStorage.getItem('Cart')
      const parsedData=JSON.parse(data);
      await localStorage.removeItem("Cart");
      parsedData.push(item)
      await localStorage.setItem("Cart",JSON.stringify(parsedData))
    }
    alert("item added to cart")
  };

  return (
    <div >
    <br></br>
    <h1 style={{textAlign:"center",textShadow:"0px 5px 10px",fontSize:"50px"}}>Our Products</h1>
    <div className="wrapper">
        {
          data.map((singleData) => {
            const base64data = singleData.image;
            console.log("image's binary value : ", base64data)

            return <>
              <div >
               
             
                <Cards
                  id={singleData._id}
                  img={singleData.image}
                  title={singleData.foodName}
                  desc={singleData.desc}
                  price={singleData.price}
                  quantity={singleData.quantity}
                  // cartItems={cartItems} // pass cartItems and setCartItems as props
                  // setCartItems={setCartItems}
                  handleAddToCart={handleAddToCart}
                />
              
                
              </div>
            </>
          })
        }
        </div>
    </div>
  );
}

function Cards(props) {
  const navigate=useNavigate();
  const clicked=()=>{
    console.log(props.title)
    console.log(props.desc)
    navigate('/Disp',
    {
      state:{
        title:props.title,
        desc:props.desc
      }
    });
  }
  

  return (
    <>
    <div >
    {/* <div onClick={clicked}> */}
        <Card style={{ width: '18rem' }} className="card_body" key={props.id}>
          <Card.Img variant="top" src={props.img} className="card_image" style={{ height: "250px" }} />
          <Card.Body>
          
            <Card.Title className="card__title" >{props.title}</Card.Title>
          
            <Button variant="secondary"> ₹{` ${props.price}`}/-</Button>
            <Button variant="danger" className="card__btn" value="remove"  onClick={() => props.handleAddToCart(props)} style={{ justifyContent: "end", textAlign: "center" }} key={props._id}>Order Now
                
            </Button>
          </Card.Body>
        </Card>
        </div>
    </>
  );
}

export default Product;
