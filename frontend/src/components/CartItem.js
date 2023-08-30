import React from 'react';

function CartItem() {
    return (

    <article className="item">
                        <img src="/imgs/cart/img-macbook-pro-2019.jpg" alt="" />
                        <div className="item-details">
                            <span className="item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto
                                ipsam a optio libero consequuntur</span>
                            <div className="select-quantity">
                                <div className="selector">
                                    <button><i className="fa-solid fa-minus modify-quantity remove-quantity"></i></button>
                                    <input type="text" value="1" className="number" disabled />
                                    <button><i className="fa-solid fa-plus modify-quantity add-quantity"></i></button>
                                    <span className="item-price">$ 25.000<button className="no-border"><i
                                        className="fa-regular fa-trash-can remove-item"></i></button></span>
                                </div>
                            </div>
                        </div>
                    </article>

    )
}


export default CartItem;