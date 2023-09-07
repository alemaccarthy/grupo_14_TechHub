import React from 'react';

function GenreCard(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-danger text-white shadow">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default GenreCard;
