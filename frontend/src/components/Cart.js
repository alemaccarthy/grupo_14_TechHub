import React from 'react';
import CartItem from './CartItem';
// importar aca el css que tengamos de cart

function Cart() {
    return (
        <>
            <section className="cart">
                <div className="cart-items">
                    
                <CartItem
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto ipsam a optio libero consequuntur"
                    price="25.000" 
                />
                <CartItem
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto ipsam a optio libero consequuntur"
                    price="50.000" 
                />
                <CartItem 
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto ipsam a optio libero consequuntur"
                    price="100.000"
                />
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
