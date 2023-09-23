import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import GenreCard from "../src/components/GenreCard";
import Section from "../src/components/Section";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";
import Footer from "../src/components/Footer";
import LastProduct from "./components/LastProduct";
import { getAllProducts } from "./utils/api";
import { getAllUsers } from "./utils/users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = await getAllProducts();
        const dataUsers = await getAllUsers();
        setTotalProducts(dataProducts.totalProducts);
        setProducts(dataProducts.products);
        setProductsByCategory(dataProducts.productsByCategory);
        setUsers(dataUsers.users);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                  Total de productos: {totalProducts}
                </h1>
              </div>

              <div className="row first-row">
                <Section title="Cellphones in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {productsByCategory.Smartphone}
                  </div>
                </Section>

                <Section title="Smartwatches in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {productsByCategory.Smartwatch}
                  </div>
                </Section>

                <Section title="Tablets in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {productsByCategory.Tablet}
                  </div>
                </Section>
              </div>

              <div className="row">
                <LastProduct products={products} />

                <div className="col-lg-6 mb-4">
                  <div className="card">
                    <div className="card-header py-3">
                      <h4 className="m-0 font-weight-bold text-gray-800">
                        Products in DataBase
                      </h4>
                    </div>
                    <div className="card-body">
                      <h5>Samsung</h5>
                      <div className="row">
                        {products.map((product) => {
                          if (product.brand.name === "Samsung") {
                            return (
                              <GenreCard
                                key={product.id}
                                name={product.title}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                    <div className="card-body">
                      <h5>Apple</h5>
                      <div className="row">
                        {products.map((product) => {
                          if (product.brand.name === "Apple") {
                            return (
                              <GenreCard
                                key={product.id}
                                name={product.title}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-3">
                      <h4 className="m-0 font-weight-bold text-gray-800">
                        Users in DataBase
                      </h4>
                    </div>
                    <div className="card-body">
                      <Switch>
                        <Route
                          path="/user/:id"
                          render={({ match }) => (
                            <UserProfile
                              user={users.find(
                                (user) => user.id === match.params.id
                              )}
                            />
                          )}
                        />
                        <Route>
                          {selectedUser ? (
                            <UserProfile user={selectedUser} />
                          ) : (
                            <Users
                              users={users}
                              onUserSelect={handleUserSelect}
                            />
                          )}
                        </Route>
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
