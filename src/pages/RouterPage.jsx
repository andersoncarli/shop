import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Shop from "./Shop"
import ShopSingle from "./ShopSingle"
import Single from "./Single"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Link } from "react-router-dom"
global.Link = Link

export default function RouterPage() {
  console.log(RouterPage)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-single" element={<ShopSingle />} />
          <Route path="/single" element={<Single />} />
        </Routes>
      </Router>
    </div>
  )
}
