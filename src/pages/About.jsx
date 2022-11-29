import React from 'react'

export default function About() {
  return (<>

    {/* main-content */}
    <div className="main-banner inner" id="home">
      {/* header */}
      <header className="header">
        <div className="container-fluid px-lg-5">
          {/* nav */}
          <nav className="py-4">
            <div id="logo">
              <h1> <Link to="/"><span className="fa fa-bold" aria-hidden="true"></span>ootie</Link></h1>
            </div>

            <label for="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2">
              <li>
                <Link to="/">Home</Link></li>
              <li className="active">
                <Link to="/about">About</Link></li>
              <li>
                <Link to="/blog">Blog</Link></li>
              <li>
                {/* First Tier Drop Down */}
                <label for="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                <Link to="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span></Link>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/shop">Shop Now</Link></li>
                  <li><Link to="/single">Single Page</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          {/* //nav */}
        </div>
      </header>
      {/* //header */}

    </div>
    {/*//main-content*/}
    {/**/}
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active">About Us</li>
    </ol>
    {/**/}
    {/*// mian-content */}
    {/*/ab */}
    <section className="hand-crafted py-5">
      <div className="container">
        <div className="inner-sec py-md-5 px-lg-5">
          <h3 className="tittle text-center"><span className="sub-tittle">About.</span> Welcome To Our Website</h3>
          <p className="mb-4 text-center px-lg-4"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
        </div>
      </div>
    </section>
    {/* //ab */}
    {/*/ab */}
    <section className="about py-md-5 py-5">
      <div className="container py-md-3">
        <h3 className="tittle text-center">What We Offer</h3>
        <div className="feature-grids row">
          <div className="col-md-4 gd-bottom mt-lg-4">
            <div className="bottom-gd p-lg-5 p-4">
              <span className="fa fa-truck" aria-hidden="true"></span>
              <h3 className="my-3">
                FREE SHIPPING</h3>
              <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
            </div>
          </div>
          <div className="col-md-4 gd-bottom mt-lg-4">
            <div className="bottom-gd2-active p-lg-5 p-4">
              <span className="fa fa-bullhorn" aria-hidden="true"></span>
              <h3 className="my-3">FREE RETURN</h3>
              <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
            </div>
          </div>
          <div className="col-md-4 gd-bottom mt-lg-4">
            <div className="bottom-gd p-lg-5 p-4">
              <span className="fa fa-gift" aria-hidden="true"></span>
              <h3 className="my-3">MEMBER DISCOUNT</h3>
              <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* //ab */}
    {/* /hand-crafted */}
    <section className="hand-crafted py-5">
      <div className="container py-md-3">
        <div className="row banner-grids">
          <div className="col-md-6 banner-image">
            <div className="effect-w3">
              <img src="images/about.jpg" alt="" className="img-fluid image1" />

            </div>

          </div>
          <div className="col-md-6 last-img pl-lg-5 p-3">
            <h3 className="tittle mb-lg-5 mb-3"><span className="sub-tittle">THE SEASON BEGINGS </span>PROMOTION SALE OFF 50%</h3>
            <p className="mb-4"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
            <ul className="tic-info list-unstyled">
              <li>

                <span className="fa fa-check mr-2"></span> Integer sit amet mattis quam

              </li>
              <li>

                <span className="fa fa-check mr-2"></span> Praesent ullamcorper dui turpis

              </li>
              <li>

                <span className="fa fa-check mr-2"></span> Integer sit amet mattis quam

              </li>
              <li>

                <span className="fa fa-check mr-2"></span> Integer sit amet mattis quam

              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
    {/* //hand-crafted */}
    {/* stats */}
    <section className="stats py-5" id="stats">
      <div className="container py-md-3">
        <div className="row stat-grids">
          <div className="col-lg-6 ser-lt">
            <div className="d-flex services-box">
              <div className="icon">
                <span className="fa fa-line-chart"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Inagittis Lacg</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}

            <div className="d-flex services-box ser-midd">
              <div className="icon">
                <span className="fa fa-bell-o"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Velitdipisc Inagittis</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}
            {/* .Services-box ends here */}

            <div className="d-flex services-box bx-4">
              <div className="icon">
                <span className="fa fa-line-chart"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Sagittis Lacus</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}
          </div>
          <div className="col-lg-6 ser-lt ser-right">
            <div className="d-flex services-box">
              <div className="icon">
                <span className="fa fa-line-chart"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Inagittis Lacg</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}

            <div className="d-flex services-box ser-midd">
              <div className="icon">
                <span className="fa fa-bell-o"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Velitdipisc Inagittis</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}
            {/* .Services-box ends here */}

            <div className="d-flex services-box bx-4">
              <div className="icon">
                <span className="fa fa-line-chart"></span>
              </div>
              {/* .Icon ends here */}
              <div className="service-content">
                <h4>Sagittis Lacus</h4>
                <p className="serp">
                  Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                </p>
              </div>
              {/* .Service-content ends here */}
            </div>
            {/* .Services-box ends here */}
          </div>
        </div>
      </div>
    </section>
    {/* //stats */}
    {/*/testimonials*/}
    <section className="testimonials py-5">
      <div className="container">
        <div className="test-info text-center">
          <h3 className="my-md-2 my-3">Jenifer Burns</h3>

          <ul className="list-unstyled w3layouts-icons clients">
            <li>
              <Link to="#">
                <span className="fa fa-star"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-star"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-star"></span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-star-half-o"></span>
              </Link>
            </li>
          </ul>
          <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

        </div>
      </div>
    </section>
    {/*//testimonials*/}
    {/*/ab */}
    <section className="about py-5">
      <div className="container pb-lg-3">
        <h3 className="tittle text-center">Popular Products</h3>
        <div className="row">
          <div className="col-md-6 latest-left">
            <div className="product-shoe-info shoe text-center">
              <img src="images/img1.jpg" className="img-fluid" alt="" />
              <div className="shop-now"><Link to="/shop" className="btn">Shop Now</Link></div>
            </div>
          </div>
          <div className="col-md-6 latest-right">
            <div className="row latest-grids">
              <div className="latest-grid1 product-men col-12">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src="images/img2.jpg" className="img-fluid" alt="" />
                    <div className="shop-now"><Link to="/shop" className="btn">Shop Now</Link></div>
                  </div>
                </div>
              </div>
              <div className="latest-grid2 product-men col-12 mt-lg-4">
                <div className="product-shoe-info shoe text-center">
                  <div className="men-thumb-item">
                    <img src="images/img3.jpg" className="img-fluid" alt="" />
                    <div className="shop-now"><Link to="/shop" className="btn">Shop Now</Link></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //ab */}
    {/* brands */}
    <section className="brands py-5" id="brands">
      <div className="container py-lg-0">
        <div className="row text-center brand-items">
          <div className="col-sm-2 col-3">
            <Link to="#"><span className="fa fa-connectdevelop" aria-hidden="true"></span></Link>
          </div>
          <div className="col-sm-2 col-3">
            <Link to="#"><span className="fa fa-empire" aria-hidden="true"></span></Link>
          </div>
          <div className="col-sm-2 col-3">
            <Link to="#"><span className="fa fa-ioxhost" aria-hidden="true"></span></Link>
          </div>
          <div className="col-sm-2 col-3">
            <Link to="#"><span className="fa fa-first-order" aria-hidden="true"></span></Link>
          </div>
          <div className="col-sm-2 col-3 mt-sm-0 mt-4">
            <Link to="#"><span className="fa fa-joomla" aria-hidden="true"></span></Link>
          </div>
          <div className="col-sm-2 col-3 mt-sm-0 mt-4">
            <Link to="#"><span className="fa fa-dropbox" aria-hidden="true"></span></Link>
          </div>
        </div>
      </div>
    </section>
    {/* brands */}
    {/* footer */}
    <footer>
      <div className="container">
        <div className="row footer-top">
          <div className="col-lg-4 footer-grid_section_w3layouts">
            <h2 className="logo-2 mb-lg-4 mb-3">
              <Link to="/"><span className="fa fa-bold" aria-hidden="true"></span>ootie</Link>
            </h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
            <ul className="w3layouts_social_list list-unstyled">
              <li>
                <Link to="#" className="w3pvt_facebook">
                  <span className="fa fa-facebook-f"></span>
                </Link>
              </li>
              <li className="mx-2">
                <Link to="#" className="w3pvt_twitter">
                  <span className="fa fa-twitter"></span>
                </Link>
              </li>
              <li>
                <Link to="#" className="w3pvt_dribble">
                  <span className="fa fa-dribbble"></span>
                </Link>
              </li>
              <li className="ml-2">
                <Link to="#" className="w3pvt_google">
                  <span className="fa fa-google-plus"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-8 footer-right">
            <div className="w3layouts-news-letter">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Newsletter</h3>

              <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
              <form action="#" method="post" className="w3layouts-newsletter">
                <input type="email" name="Email" placeholder="Enter your email..." required="" />
                <button className="btn1"><span className="fa fa-paper-plane-o" aria-hidden="true"></span></button>

              </form>
            </div>
            <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
              <div className="col-md-4 footer-grid_section_w3layouts">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Information</h3>
                <ul className="list-unstyled w3layouts-icons">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="#">Gallery</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="#">Services</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-grid_section_w3layouts">
                {/* social icons */}
                <div className="agileinfo_social_icons">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Customer Service</h3>
                  <ul className="list-unstyled w3layouts-icons">

                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="#">Delivery & Returns</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="#">Waranty</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="#">Terms & Condition</Link>
                    </li>
                    <li className="mt-3">
                      <Link to="#">Privacy Plolicy</Link>
                    </li>
                  </ul>
                </div>
                {/* social icons */}
              </div>
              <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Contact Info</h3>
                <div className="contact-info">
                  <div className="footer-address-inf">
                    <h4 className="ad-info mb-2">Phone</h4>
                    <p>+121 098 8907 9987</p>
                  </div>
                  <div className="footer-address-inf my-4">
                    <h4 className="ad-info mb-2">Email </h4>
                    <p><Link to="/mailto:info@example.com">info@example.com</Link></p>
                  </div>
                  <div className="footer-address-inf">
                    <h4 className="ad-info mb-2">Location</h4>
                    <p>Honey Avenue, New York City</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="cpy-right text-left row">
              <p className="col-md-10">© 2019 Bootie. All rights reserved | Design by
                <Link to="http://w3layouts.com"> W3layouts.</Link>
              </p>
              {/* move top icon */}
              <Link to="#home" className="move-top text-right col-md-2"><span className="fa fa-long-arrow-up" aria-hidden="true"></span></Link>
              {/* //move top icon */}
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* //footer */}


  </>
  )
}