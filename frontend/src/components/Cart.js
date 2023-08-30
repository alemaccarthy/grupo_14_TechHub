import React from 'react';

function Cart() {
    return (
        <>
            <section className="cart">
                <div className="cart-items">
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
                </div>
                <div className="order">
                    <div className="subtotal">
                        <span className="products-quantity"> 3 artículos</span>
                        <span className="subtotal-amount"> $ 75.000</span>
                    </div>
                    <div className="shipping">
                        <span className="shipping-cost">Costo de envío</span>
                        <span className="free-shipping"><i className="fa-solid fa-truck-fast fa-2xs shipping-truck"
                            style={{ color: '#22bf3c' }}></i>Gratis</span>
                    </div>
                </div>
                <div className="totals">
                    <div className="total-purchase">
                        <span className="summary">Total</span>
                        <span className="total-amount"> $ 75.000</span>
                    </div>
                </div>
                <section className="buttons">
                    <a href="/user/complete-purchase" className="btn-checkcart">Realizar Pedido</a>
                </section>
            </section>
            <script src="/js/main.js"></script>
        </>
    );
}

export default Cart;
