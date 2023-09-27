import React from 'react';

function LastUser({ users }) {
    if (users.length === 0) {
        return null;
    }
    const url_base = 'http://localhost:3000';

    const lastUser = users[0];

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-gray-800">Last user in Database</h4>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h4>{lastUser.name + ' ' + lastUser.lastName}</h4>
                        <img src={url_base + lastUser.profile_picture} alt="User Profile" className="img-fluid img-lastUser" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastUser;
