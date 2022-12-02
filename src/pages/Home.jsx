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

    {/* Promotion Cards */}
    <section className="about py-md-5 py-5">
      <div className="container-fluid">
        <div className="feature-grids row px-3">
          <Offer icon="truck" title="FREE SHIPPING" detail="On all order over $2000" />
          <Offer icon="bullhorn" title="FREE RETURN" detail="On 1st exchange in 30 days" className="bottom-gd2-active" />
          <Offer icon="gift" title="MEMBER DISCOUNT" detail="Register & save up to $29%" />
          <Offer icon="usd" title="PREMIUM SUPPORT" detail="Support 24 hours per day" />
        </div>
      </div>
    </section>

    {/* New Arrivals */}
    <section className="about py-5">
      <div className="container pb-lg-3">

        <h3 className="tittle text-center">New Arrivals</h3>

        <div className="row">
          <Product img="images/s1.jpg" name="Bella Toes" price="$675.00" stars="2.5" />
          <Product img="images/s2.jpg" name="Chikku Loafers " price="$475.00" stars="2.5" />
          <Product img="images/s3.jpg" name="(SRV) Sneakers" price="$575.00" stars="3.5" />
          <Product img="images/s4.jpg" name="Shuberry Heels" price="$575.00" stars="3.5" />
          <Product img="images/s5.jpg" name="Red Bellies" price="$575.00" stars="3.5" />
          <Product img="images/s6.jpg" name="Catwalk Flats" price="$575.00" stars="3.5" />
          <Product img="images/s7.jpg" name="Running Shoes" price="$675.00" stars="2.5" />
          <Product img="images/s8.jpg" name="Sukun Casuals" price="$775.00" stars="3.5" />
          <Product img="images/s9.jpg" name="Bank Sneakers" price="$875.00" stars="4.5" />
        </div>

      </div>
    </section>

    {/* testimonials */}
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

    {/* Popular Products */}
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
          <Brand brand="connectdevelop" />
          <Brand brand="empire" />
          <Brand brand="ioxhost" />
          <Brand brand="first-order" />
          <Brand brand="joomla" />
          <Brand brand="dropbox" />
        </div>
      </div>
    </section>

    <Footer></Footer>
  </>)
}

function Product({ img, name, price, stars }) {
  return (
    <div className="col-md-4 product-men">
      <div className="product-shoe-info shoe text-center">
        <div className="men-thumb-item">
          <img src={img} className="img-fluid" alt="" />
          <span className="product-new-top">New</span>
        </div>
        <div className="item-info-product">
          <h4>
            <Link to="/shop-single">{name}</Link>
          </h4>

          <div className="product_price">
            <div className="grid-price">
              <span className="money">{price}</span>
            </div>
          </div>
          <Stars value={stars} />
        </div>
      </div>
    </div>
  )
}

function Brand({ brand }) {
  return (
    <div className="col-sm-2 col-3"> <Link to="#"><span className={"fa fa-" + brand} aria-hidden="true"></span></Link> </div>
  )
}

export default Home