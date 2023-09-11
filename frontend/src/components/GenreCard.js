import React from 'react';

function GenreCard(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="productsInDB">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default GenreCard;
