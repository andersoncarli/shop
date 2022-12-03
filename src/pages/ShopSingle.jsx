
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
            <form action="#" method="post" className="newsletter">
              <input type="email" name="Email" placeholder="Enter your email..." required="" />
              <button className="btn1">Check</button>
            </form>

            <span><Link to="#">login to save in wishlist </Link></span>
            <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.. </p>
          </div>

          <div className="share-desc">
            <div className="share">
              <h4>Share Product :</h4>
              <ul className="social_list list-unstyled">
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


      </div >
    </section >

    {/* New Arrivals */}
    <section className="about py-5">
      <div className="container pb-lg-3">
        <h3 className="tittle text-center">Featured Products</h3>

        <div className="row">
          <Product img="images/s10.jpg" name="Suitable Lace Up" price="$675.00" stars="2.5" />
          <Product img="images/s11.jpg" name="Black Flats " price="$475.00" stars="2.5" />
          <Product img="images/s12.jpg" name="Elevator Shoes" price="$575.00" stars="3.5" />
        </div>

      </div>
    </section>

    <Footer></Footer>
  </>)
}
