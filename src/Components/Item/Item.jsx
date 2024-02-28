import React from 'react'
import "./Item.css"


// Here Item card is integerated and added insided the popular page
const Item = (props) => {
  return (
    <div className='item'>
    <img src={props.image} alt="" />
    <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-price-old">
          ${props.new_price}
        </div>
        <div className="item-price-new">
          ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item
