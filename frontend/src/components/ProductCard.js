import React from 'react';

function ProductCard(props) {
    return (
        <div className="col-lg-6 mb-4 product">
            <div className="productsInDB">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
