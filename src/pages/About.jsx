export default function About() {
  return (<>
    <Header>About Us</Header>

    {/* about */}
    <section className="hand-crafted py-5">
      <div className="container">
        <div className="inner-sec py-md-5 px-lg-5">
          <h3 className="tittle text-center"><span className="sub-tittle">About.</span> Welcome To Our Website</h3>
          <p className="mb-4 text-center px-lg-4"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
        </div>
      </div>
    </section>

    {/* hand-crafted */}
    <section className="hand-crafted py-5">
      <div className="container py-md-3">
        <div className="row banner-grids">
          <div className="col-md-6 banner-image">
            <div className="effect-w3">
              <img src="images/about.jpg" alt="" className="img-fluid image1" />
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Promotion Cards */}
    <section className="about py-md-5 py-5">
      <div className="container-fluid">
        <h3 className="tittle text-center">What We Offer</h3>
        <div className="feature-grids row px-3">
          <Offer icon="truck" title="FREE SHIPPING." detail="On all order over $2000" />
          <Offer icon="bullhorn" title="FREE RETURN" detail="On 1st exchange in 30 days" className="bottom-gd2-active" />
          <Offer icon="gift" title="MEMBER DISCOUNT" detail="Register & save up to $29%" />
          <Offer icon="usd" title="PREMIUM SUPPORT" detail="Support 24 hours per day" />
        </div>
      </div>
    </section>

    {/* stats */}
    <section className="stats py-5" id="stats">
      <div className="container py-md-3">
        <div className="row stat-grids">
          <div className="col-lg-6 ser-lt">
            <ServiceCard icon="line-chart" title="Inagittis Lacg" detail="Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing." />
            <ServiceCard icon="bell-o" title="Velitdipisc Inagittis" detail="Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing." />
            <ServiceCard icon="line-chart" title="Inagittis Lacg" detail="Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing." />
            <ServiceCard icon="bell-o" title="Velitdipisc Inagittis" detail="Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing." />
            <ServiceCard icon="line-chart" title="Inagittis Lacg" detail="Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing." />
          </div>
        </div>
      </div>
    </section>

    {/* testimonials*/}
    <section className="testimonials py-5">
      <div className="container">
        <div className="test-info text-center">
          <h3 className="my-md-2 my-3">Jenifer Burns</h3>

          <Stars className="list-unstyled icons clients"></Stars>
          <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

        </div>
      </div>
    </section>

    {/* about */}
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

    <Footer></Footer>
  </>
  )
}


function ServiceCard({ icon, title, detail, className = '' }) {
  return (
    <div className="d-flex services-box">
      <div className="icon">
        <span className={"fa fa-" + icon}></span>
      </div>

      <div className="service-content">
        <h4>{title}</h4>
        <p className="serp">{detail}</p>
      </div>
    </div>
  )
}
