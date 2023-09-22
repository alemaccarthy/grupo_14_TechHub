import React from 'react';
import { Link } from 'react-router-dom';

function Users({ users }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/user/${user.id}`} className="btn btn-primary">
                                Detail
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Users;
