import React from 'react';
import './Cart.css';

export default function Cart() {
  const [data, setData] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      const datas = await localStorage.getItem('Cart');
      const parsedData = JSON.parse(datas);
      setData([...parsedData]);
    };
    getData();
  }, []);

  const incrementQuantity = (id) => {
    const newCartItems = [...data];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity += 1;
    setData(newCartItems);
  };

  const decrementQuantity = (id) => {
    const newCartItems = [...data];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity -= 1;
    setData(newCartItems.filter((item) => item.quantity > 0));
  };

  const clearCart = () => {
    localStorage.removeItem('Cart');
    setData([]);
    setTotalPrice(0);
  };

  React.useEffect(() => {
    setTotalPrice(
      data.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [data]);

  return (
    <div className='cart-container'>
      <h1>Cart</h1>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>
                {typeof item.price === 'number' ? `₹${item.price.toFixed(2)}` : ''}
              </td>
              <td>{item.quantity}</td>
              <td>
                <button className='inc_butt' onClick={() => incrementQuantity(item.id)}>+</button>
                <button className='dec_butt' onClick={() => decrementQuantity(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='cart-total'> Total: ₹{totalPrice.toFixed(2)}</h2>
      <button onClick={clearCart} className='cart-clear'>Clear Cart</button>
    </div>
  );
}

