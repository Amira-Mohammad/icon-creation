import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Slider from "./Components/Slider/Slider";
import Products from "./Components/Products/Products";
import Messages from "./Components/Messages/Messages";
import MissionVission from "./Components/MissionVission/MissionVission";
import Offers from "./Components/Offers/Offers";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";

// let router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" />
//       <Route path="slider" element={<Slider />} />
//       <Route path="messages" element={<Messages />} />
//       <Route path="mission" element={<MissionVission />} />
//       <Route path="offers" element={<Offers />} />
//       <Route path="products" element={<Products />} />
//       <Route path="featuredproducts" element={<FeaturedProducts />} />
//     </Route>
//   )
// );

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Schlaf Meister
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/messages"
                  >
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/featuredproducts"
                  >
                    Featured Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/offers"
                  >
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/mission"
                  >
                    Mission & Vission
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="messages" element={<Messages />} />
          <Route path="mission" element={<MissionVission />} />
          <Route path="offers" element={<Offers />} />
          <Route path="products" element={<Products />} />
          <Route path="featuredproducts" element={<FeaturedProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
