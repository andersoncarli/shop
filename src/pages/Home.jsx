// https://www.youtube.com/watch?v=xmCdR4ECJJI&t=606s

// Theme Author: W3layouts http://w3layouts.com
// License: Creative Commons Attribution 3.0 Unported
// License URL: http://creativecommons.org/licenses/by/3.0/

function Home() {
  return (<>

    <Header>
      <div className="banner-info">
        <p>Trending of the week</p>
        <h3 className="mb-4">Casual Shoes for Men</h3>
        <div className="ban-buttons">
          <Link to="/shop-single" className="btn">Shop Now</Link>
          <Link to="/single" className="btn active">Read More</Link>
        </div>
      </div>
    </Header>

    {/*//main-content*/}
    {/*/ab */}
    <section className="about py-md-5 py-5">
      <div className="container-fluid">
        <div className="feature-grids row px-3">
          <div className="col-lg-3 gd-bottom">
            <div className="bottom-gd row">
              <div className="icon-gd col-md-3 text-center"><span className="fa fa-truck" aria-hidden="true"></span>
              </div>
              <div className="icon-gd-info col-md-9">
                <h3 className="mb-2">FREE SHIPPING</h3>
                <p>On all order over $2000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 gd-bottom">
            <div className="bottom-gd row bottom-gd2-active">
              <div className="icon-gd col-md-3 text-center"><span className="fa fa-bullhorn"
                aria-hidden="true"></span></div>
              <div className="icon-gd-info col-md-9">
                <h3 className="mb-2">FREE RETURN</h3>
                <p>On 1st exchange in 30 days</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 gd-bottom">
            <div className="bottom-gd row">
              <div className="icon-gd col-md-3 text-center"> <span className="fa fa-gift" aria-hidden="true"></span>
              </div>

              <div className="icon-gd-info col-md-9">
                <h3 className="mb-2">MEMBER DISCOUNT</h3>
                <p>Register & save up to $29%</p>
              </div>

            </div>
          </div>
          <div className="col-lg-3 gd-bottom">
            <div className="bottom-gd row">
              <div className="icon-gd col-md-3 text-center"> <span className="fa fa-usd" aria-hidden="true"></span>
              </div>
              <div className="icon-gd-info col-md-9">
                <h3 className="mb-2">PREMIUM SUPPORT</h3>
                <p>Support 24 hours per day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //ab */}
    {/*/ab */}
    <section className="about py-5">
      <div className="container pb-lg-3">
        <h3 className="tittle text-center">New Arrivals</h3>
        <div className="row">
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s1.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Bella Toes </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$675.00</span>
                  </div>
                </div>
                <Stars value="2.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s2.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Chikku Loafers </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$475.00</span>
                  </div>
                </div>
                <Stars value="2.5"></Stars>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s3.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">(SRV) Sneakers </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$575.00</span>
                  </div>
                </div>
                <Stars value="3.5"></Stars>
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men my-lg-4">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s4.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Shuberry Heels</Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$575.00</span>
                  </div>
                </div>
                <Stars value="3.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men my-lg-4">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s5.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Red Bellies </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$575.00</span>
                  </div>
                </div>
                <Stars value="3.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men my-lg-4">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s6.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Catwalk Flats </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$575.00</span>
                  </div>
                </div>
                <Stars value="3.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s7.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Running Shoes </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$675.00</span>
                  </div>
                </div>
                <Stars value="2.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s8.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Sukun Casuals </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price ">
                    <span className="money ">$775.00</span>
                  </div>
                </div>

                <Stars value="3.5" />
              </div>
            </div>
          </div>
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s9.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Bank Sneakers</Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$875.00</span>
                  </div>
                </div>
                <Stars value="4.5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* //ab */}
    {/*/testimonials*/}
    <section className="testimonials py-5">
      <div className="container">
        <div className="test-info text-center">
          <h3 className="my-md-2 my-3">Jenifer Burns</h3>

          <Stars value="2.5"></Stars>
          <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s.
            Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor
            mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

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

    <Footer></Footer>
  </>)
}

export default Home