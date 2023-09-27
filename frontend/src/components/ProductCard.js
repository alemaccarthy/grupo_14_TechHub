import React from 'react';

function ProductCard(props) {
    const url_base = 'http://localhost:3000';

    return (
        <div className="col-lg-6 mb-4 product">
                <div className="productsInDB">
                    <div className="card-body">
            <a
                className="btn btn-danger"
                href={`${url_base}/products/${props.id}/detail`}
                target="_blank"
                rel="noopener noreferrer"
            >
                        {props.name}
            </a>
                    </div>
                </div>
        </div>

    );
}

export default ProductCard;
