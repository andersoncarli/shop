export default function Shop() {
    return (<>
        <Header>Shop</Header>

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
                </div>
            </div>
            {/* reviews */}
            <div className="customer-rev left-side my-4">
                <h3 className="sear-head">Customer Review</h3>
                <div className="w3layouts-box-list">
                    <Stars value="5.0" />
                    <Stars value="4.0" />
                    <Stars value="3.5" />
                    <Stars value="3.0" />
                    <Stars value="2.5" />
                </div>
            </div>

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

            {/* //product left */}
            {/* product right */}
            <div className="left-ads-display col-lg-8">
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
                                <Stars value="3.5" />
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
                                <Stars value="3.5" />
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
                                <Stars value="3.5" />
                            </div>
                        </div>
                    </div >
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
                    </div >
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
                    </div >
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
                    </div >
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
                                <Stars value="3.5" />
                            </div>
                        </div>
                    </div >
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
                    </div >
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
                                <Stars value="3.5" />
                            </div>
                        </div>
                    </div >
                </div >
                <div className="grid-img-right mt-4 text-right">
                    <span className="money">Flat 50% Off</span>
                    <Link to="/shop-single" className="btn">Shop Now</Link>
                </div>
            </div >
        </div >

        <Footer></Footer>
    </>)
}
