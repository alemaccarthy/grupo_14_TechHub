import React from 'react';
import "https://kit.fontawesome.com/c4ac9449c7.js";

function Section(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                            {props.children}
                        </div>
                        <div class="col-auto">
                        {props.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
