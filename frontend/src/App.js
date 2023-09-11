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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts(); // Espera la respuesta de getAllProducts
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData(); // Llama a la función asincrónica fetchData
  }, []);
  console.log('ESTOS SON LOS PRODUCTS EN REACT ' + products);
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Contenedor principal para las secciones */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Total de productos: </h1>
              </div>

              {/* Contenedor para las secciones */}
              <div className="row first-row">
                {/* Sección 1 */}
                <Section title="Cellphones in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    21
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                  </div>
                </Section>

                {/* Sección 2 */}
                <Section title="Smartwatches in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    79
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
  <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
  <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
</svg>
                  </div>
                </Section>

                {/* Sección 3 */}
                <Section title="Tablets in DataBase">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    49
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tablet" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
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
                        {products.map((product) => (
                          <GenreCard key={product.id} name={product.category.name} />
                        ))}
                      </div>
                    </div>
                    <div className="card-body">
                      <h5>Apple</h5>
                      <div className="row">
                        {products.map((product) => (
                          <GenreCard key={product.id} name={product.category.name} />
                        ))}
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
