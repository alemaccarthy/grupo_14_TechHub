import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/users/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del usuario');
                }
                const userData = await response.json();
                setUser(userData.user);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <p>Cargando datos del usuario...</p>;
    }

    return (
        <div className="container mt-5">
            <h2>User Profile</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src={user.profile_picture} alt="User Profile" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td>{user.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>DNI:</td>
                                <td>{user.dni}</td>
                            </tr>
                            <tr>
                                <td>Street:</td>
                                <td>{user.street}</td>
                            </tr>
                            <tr>
                                <td>Number:</td>
                                <td>{user.number}</td>
                            </tr>
                            <tr>
                                <td>Floor:</td>
                                <td>{user.floor}</td>
                            </tr>
                            <tr>
                                <td>Door:</td>
                                <td>{user.door}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{user.city}</td>
                            </tr>
                            <tr>
                                <td>Province:</td>
                                <td>{user.province}</td>
                            </tr>
                            <tr>
                                <td>Postal Code:</td>
                                <td>{user.postal_code}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td>{user.telephone}</td>
                            </tr>
                            <tr>
                                <td>Created At:</td>
                                <td>{user.createdAt}</td>
                            </tr>
                            <tr>
                                <td>Updated At:</td>
                                <td>{user.updatedAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
