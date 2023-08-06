import React from "react";

const Search = ({ value, onChange, orders }) => {
  console.log(value);
  console.log(orders);
  const search = () => {
    const orderIs = value;
    console.log(orderIs);
  }
  
  return (
    <>
      <input type="search" value={value} onChange={onChange} list="orderID" placeholder="Search order ID" />
      <datalist id="orderID">
        {orders.map((order, index) => (
          <option key={index} value={order["&id"]} > {order["&id"]} </option>
        ))}
      </datalist>
      <button onClick={search}>Search</button>
    </>
  )
}
export default Search
