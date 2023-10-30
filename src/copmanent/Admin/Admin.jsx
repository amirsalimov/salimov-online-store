/* eslint-disable react/prop-types */

import { useId, useState } from 'react';
import './Admin.css';
export default function Admin({title, setTitle, price, setPrice, handleSubmit}) {

  const handleAdd = (e) => {
const id =uid ();
const img = 'https://picsum.photos/id/1/200/300';
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")


    e.preventDefault ()
    const newItem ={id:id, img:img, name: title, price:price};
    setProduct ([...products, newItem]);

  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      
      <label htmlFor="">Add product</label>
        <input type="text"value={title} onChange={(e) => setTitle(e.target.value)} placeholder='name' />
        <input type="number"value={price}onChange={(e) => setPrice(e.target.value)}placeholder='price' />
        <button>Add</button>
      </form>
    </div>
  )
}
