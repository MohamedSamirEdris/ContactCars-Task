import React from 'react'

export default function Cart() {
    const { cartItems, addToCard, removeFromCart } = props;
  return (
    <aside className="block col-1">
    <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <div>Cart Is Emty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => addToCart(item)} className="add">
              +
            </button>
            <button onClick={() => removeFromCart(item)} className="remove">
              -
            </button>
          </div>

          <div>
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice}</div>
          </div>
          <div className="row">
            <div className="col-2">shipping Price</div>
            <div className="col-1 text-right">${shippingPrice}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice}</strong>
            </div>
          </div>
          <hr/>
          <div className='row'>
            <button >Checkout</button>
          </div>
        </>
      )}
    </div>
  </aside>
);
  
}
