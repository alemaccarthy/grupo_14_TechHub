import React from 'react';

function LastUser({ users }) {
    if (users.length === 0) {
        return null;
    }
    const url_base = 'http://localhost:3000';

    const lastUser = users[users.length -1];

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-gray-800">Last user in Database</h4>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h4>{lastUser.name}</h4>
                        {/* <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: '40rem' }}
                            src={lastUser.images.length > 0 ? url_base + lastProduct.images[0].path : ''}
                            alt={lastUser.title}
                        /> */}
                    </div>
                    <p>{lastUser.name}</p>
                    <a
                        className="btn btn-danger"
                        href={`${url_base}/profile/${lastUser.name}/${lastUser.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View product detail
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastUser;
