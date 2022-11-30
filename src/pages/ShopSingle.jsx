
export default function ShopSingle() {
  return (<>
    <Header>Shop Single</Header>

    <section className="ab-info-main py-md-5 py-4">
      <div className="container py-md-3">

        <div className="desc1-left col-md-6">
          <img src="images/d1.jpg" className="img-fluid" alt="" />
        </div>

        <div className="desc1-right col-md-6 pl-lg-4">
          <h3>Lorem ipsum dolor sit amet laoret.</h3>
          <h5>Rs. 499 <span>599</span> <Link to="#">click for offer</Link></h5>

          <div className="available mt-3">
            <form action="#" method="post" className="w3layouts-newsletter">
              <input type="email" name="Email" placeholder="Enter your email..." required="" />
              <button className="btn1">Check</button>
            </form>

            <span><Link to="#">login to save in wishlist </Link></span>
            <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.. </p>
          </div>

          <div className="share-desc">
            <div className="share">
              <h4>Share Product :</h4>
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
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="row sub-para-w3layouts mt-5">

          <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
          <p className="mt-3 italic-blue">Consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
        </div>

        <h3 className="shop-sing">Featured Products</h3>
        <div className="row m-0">
          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s10.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Suitable Lace Up </Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$675.00</span>
                  </div>
                </div>
                <Stars value="3.5" />
              </div>
            </div>
          </div>

          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s11.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Black Flats</Link>
                </h4>

                <div className="product_price">
                  <div className="grid-price">
                    <span className="money">$475.00</span>
                  </div>
                </div>
                <Stars value="3.5" />
              </div>
            </div>
          </div>

          <div className="col-md-4 product-men">
            <div className="product-shoe-info shoe text-center">
              <div className="men-thumb-item">
                <img src="images/s12.jpg" className="img-fluid" alt="" />
                <span className="product-new-top">New</span>
              </div>
              <div className="item-info-product">
                <h4>
                  <Link to="/shop-single">Elevator Shoes </Link>
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
        </div>
      </div >
    </section >

    <Footer></Footer>
  </>)
}
