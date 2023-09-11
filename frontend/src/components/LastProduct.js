import React from 'react';
import mandalorian from '../assets/images/mandalorian.jpg';

function LastProduct() {
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
                            src={mandalorian}
                            alt="Star Wars - Mandalorian"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore
                        libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem
                        culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione
                        aperiam voluptatum?
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
                        View product detail
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastProduct;
