import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Missing() {
  return (
    <header className="page-intro">
      <div className="wrap">
        <h1>That page is not on this site.</h1>
        <p className="lede">The demonstration includes Home, Services, Our Work, About, and Contact.</p>
        <Link className="btn btn--forest" to="/">Back to home</Link>
      </div>
    </header>
  );
}
