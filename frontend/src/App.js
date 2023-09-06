import React from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Topbar from "../src/components/Topbar";
import Section from "../src/components/Section";
import GenreCard from "../src/components/GenreCard";
import Footer from "../src/components/Footer";
import LastMovie from "../src/components/LastMovie";

function App() {
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
                        {/* Tarjeta de género 1 */}
                        <GenreCard name="Acción" />

                        {/* Tarjeta de género 2 */}
                        <GenreCard name="Animación" />

                        {/* Tarjeta de género 3 */}
                        <GenreCard name="Aventura" />

                        {/* Tarjeta de género 4 */}
                        <GenreCard name="Ciencia Ficción" />

                        {/* Tarjeta de género 5 */}
                        <GenreCard name="Comedia" />

                        {/* Tarjeta de género 6 */}
                        <GenreCard name="Documental" />

                        {/* Tarjeta de género 7 */}
                        <GenreCard name="Drama" />

                        {/* Tarjeta de género 8 */}
                        <GenreCard name="Fantasía" />

                        {/* Tarjeta de género 9 */}
                        <GenreCard name="Infantiles" />

                        {/* Tarjeta de género 10 */}
                        <GenreCard name="Musical" />
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
