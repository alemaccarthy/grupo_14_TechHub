import React from 'react';

function LastProduct({ products }) {
    if (products.length === 0) {
        return null;
    }

    const lastProduct = products[0];

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h4>
                </div>
                <div className="card-body">
                    <div className="text-center">

                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: '40rem' }}
                            src={lastProduct.images.length > 0 ? lastProduct.images[0].path : ''}
                            alt={lastProduct.title}
                        />
                    </div>
                    <p>{lastProduct.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
                        View product detail
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastProduct;
