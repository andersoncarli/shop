
export default function ShopSingle() {
    return (<>
        <Header>Shop Single</Header>

        <section className="ab-info-main py-md-5 py-4">
            <div className="container py-md-3">
                {/* top Products */}
                <div className="row">
                    {/* product left */}
                    <div className="side-bar col-lg-4">

                        <div className="search-bar w3layouts-newsletter">
                            <h3 className="sear-head">Search Here..</h3>
                            <form action="#" method="post" className="d-flex">
                                <input type="search" placeholder="Product name..." name="search" className="form-control" required="" />
                                <button className="btn1"><span className="fa fa-search" aria-hidden="true"></span></button>
                            </form>
                        </div>
                        {/*preference */}
                        <div className="left-side my-4">
                            <h3 className="sear-head">Occasion</h3>
                            <ul className="w3layouts-box-list">
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">Casuals</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">Party</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">Wedding</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">Ethnic</span>
                                </li>
                            </ul>
                        </div>
                        {/* // preference */}
                        {/* discounts */}
                        <div className="left-side">
                            <h3 className="sear-head">Discount</h3>
                            <ul className="w3layouts-box-list">
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">5% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">10% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">20% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">30% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">50% or More</span>
                                </li>
                                <li>
                                    <input type="checkbox" className="checked" />
                                    <span className="span">60% or More</span>
                                </li>
                            </ul>
                        </div>
                        {/* //discounts */}
                        {/* reviews */}
                        <div className="customer-rev left-side my-4">
                            <h3 className="sear-head">Customer Review</h3>
                            <ul className="w3layouts-box-list">
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span>5.0</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span>4.0</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star-half-o" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span>3.5</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span>3.0</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star" aria-hidden="true"></span>
                                        <span className="fa fa-star-half-o" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span className="fa fa-star-o" aria-hidden="true"></span>
                                        <span>2.5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* //reviews */}
                        {/* deals */}
                        <div className="deal-leftmk left-side">
                            <h3 className="sear-head">Special Deals</h3>
                            <div className="special-sec1 row mb-3">
                                <div className="img-deals col-md-4">
                                    <img src="images/s4.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="img-deal1 col-md-4">
                                    <h3>Shuberry Heels</h3>
                                    <Link to="/shop-single">$180.00</Link>
                                </div>

                            </div>
                            <div className="special-sec1 row">
                                <div className="img-deals col-md-4">
                                    <img src="images/s2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="img-deal1 col-md-8">
                                    <h3>Chikku Loafers</h3>
                                    <Link to="/shop-single">$99.00</Link>
                                </div>

                            </div>
                            <div className="special-sec1 row my-3">
                                <div className="img-deals col-md-4">
                                    <img src="images/s1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="img-deal1 col-md-8">
                                    <h3>Bella Toes</h3>
                                    <Link to="/shop-single">$165.00</Link>
                                </div>

                            </div>
                            <div className="special-sec1 row">
                                <div className="img-deals col-md-4">
                                    <img src="images/s5.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="img-deal1 col-md-8">
                                    <h3>Red Bellies</h3>
                                    <Link to="/shop-single">$225.00</Link>
                                </div>

                            </div>
                            <div className="special-sec1 row mt-3">
                                <div className="img-deals col-md-4">
                                    <img src="images/s3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="img-deal1 col-md-8">
                                    <h3>(SRV) Sneakers</h3>
                                    <Link to="/shop-single">$169.00</Link>
                                </div>

                            </div>
                        </div>
                        {/* //deals */}

                    </div>
                    {/* //product left */}
                    {/* product right */}
                    <div className="left-ads-display col-lg-8">
                        <div className="row">
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
                                        <ul className="stars">
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                        </ul>
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
                                        <ul className="stars">
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                        </ul>
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
                                        <ul className="stars">
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                            <li><Link to="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

        <Footer></Footer>
    </>)
}