export default function () {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 footer-grid_section">
            <h2 className="logo-2 mb-lg-4 mb-3">
              <Link to="/"><span className="fa fa-bold" aria-hidden="true"></span>ootie</Link>
            </h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
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
          <div className="col-lg-8 footer-right">
            <div className="news-letter">
              <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Newsletter</h3>

              <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
              <form action="#" method="post" className="newsletter">
                <input type="email" name="Email" placeholder="Enter your email..." required="" />
                <button className="btn1"><span className="fa fa-paper-plane-o" aria-hidden="true"></span></button>

              </form>
            </div>
            <div className="row mt-lg-4 bottom-sec-nav mx-0">
              <div className="col-md-4 footer-grid_section">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Information</h3>

                <ul className="list-unstyled icons">
                  <li> <Link to="/">Home</Link> </li>
                  <li className="mt-3"> <Link to="/about">About Us</Link> </li>
                  <li className="mt-3"> <Link to="#">Gallery</Link> </li>
                  <li className="mt-3"> <Link to="#">Services</Link> </li>
                  <li className="mt-3"> <Link to="/contact">Contact Us</Link> </li>
                </ul>
              </div>

              <div className="col-md-4 footer-grid_section">

                {/* social icons */}
                <div className="agileinfo_social_icons">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">Customer Service</h3>
                  <ul className="list-unstyled icons">

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
              </div>

              <div className="col-md-4 footer-grid_section my-md-0 my-5">
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
                <Link to="/http://w3layouts.com"> W3layouts.</Link>
              </p>
              {/* move top icon */}
              <Link to="#home" className="move-top text-right col-md-2"><span className="fa fa-long-arrow-up" aria-hidden="true"></span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}