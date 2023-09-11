import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Section from "../src/components/Section";
import GenreCard from "./components/GenreCard";
import Footer from "../src/components/Footer";
import LastProduct from "./components/LastProduct";

import { getAllProducts } from "./utils/api";

function App() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [totalProducts, setTotalProducts] = useState(0); // Estado para almacenar el total de productos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts(); // Espera la respuesta de getAllProducts
        setTotalProducts(data.totalProducts); // Establece el total de productos en el estado
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Total de productos: {totalProducts}</h1>
              </div>

              <div className="row first-row">

                <Section title="Cellphones in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    21

                  </div>
                </Section>

                {/* Sección 2 */}
                <Section title="Smartwatches in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    79
                    {/* Tu SVG y otros detalles */}
                  </div>
                </Section>

                {/* Sección 3 */}
                <Section title="Tablets in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    49
                    {/* Tu SVG y otros detalles */}
                  </div>
                </Section>
              </div>

              {/* Contenido de LastMovie */}
              <div className="row">
                <LastProduct />

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
                          if (product.brand.name === 'Samsung') {
                            return (
                              <GenreCard key={product.id} name={product.title} />
                            );
                          }
                          return null; // Opcional: Si no es un producto de Samsung, retorna null
                        })}
                      </div>
                    </div>
                    <div className="card-body">
                      <h5>Apple</h5>
                      <div className="row">
                        {products.map((product) => {
                          if (product.brand.name === 'Apple') {
                            return (
                              <GenreCard key={product.id} name={product.title} />
                            );
                          }
                          return null; 
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
