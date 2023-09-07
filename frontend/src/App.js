import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Topbar from "../src/components/Topbar";
import Section from "../src/components/Section";
import GenreCard from "../src/components/GenreCard";
import Footer from "../src/components/Footer";
import LastMovie from "../src/components/LastMovie";

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
            <Topbar />
            {/* Contenedor principal para las secciones */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              {/* Contenedor para las secciones */}
              <div className="row">
                {/* Sección 1 */}
                <Section title="Movies in Data Base">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    21
                  </div>
                </Section>

                {/* Sección 2 */}
                <Section title="Total awards">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    79
                  </div>
                </Section>

                {/* Sección 3 */}
                <Section title="Actors quantity">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    49
                  </div>
                </Section>
              </div>

              {/* Contenido de LastMovie */}
              <div className="row">
                <LastMovie />

                <div className="col-lg-6 mb-4">
                  <div className="card">
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">
                        Genres in Data Base
                      </h5>
                    </div>
                    <div className="card-body">
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
