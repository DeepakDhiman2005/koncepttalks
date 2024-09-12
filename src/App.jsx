import React from "react";

// routes
import Routing from "./routes/Routing";

/* src/index.css */
import "slick-carousel/slick/slick.css"; // Import Slick styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles

// provider
import ProvidedRoutes from "./routes/ProvidedRoutes";

// common
import Navbar from "./common/Navbar";

function App() {
  return (
    <>
      <ProvidedRoutes>
        <Navbar />
        <Routing />
      </ProvidedRoutes>
    </>
  )
}

export default App
