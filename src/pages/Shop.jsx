import React from 'react'

export default function Shop() {
    return (<>
        <div class="main-banner inner" id="home">

            {/* header */}
            <header class="header">
                <div class="container-fluid px-lg-5">
                    {/* nav */}
                    <nav class="py-4">
                        <div id="logo">
                            <h1> <Link to="/"><span class="fa fa-bold" aria-hidden="true"></span>ootie</Link></h1>
                        </div>

                        <label htmlFor="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu mt-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li>
                                {/* First Tier Drop Down */}
                                <label htmlFor="drop-2" class="toggle">Drop Down <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
                                <Link to="#">Drop Down <span class="fa fa-angle-down" aria-hidden="true"></span></Link>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/shop">Shop Now</Link></li>
                                    <li><Link to="/shop-single">Single Page</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">Single Page</li>
            </ol>

        </div>

        <div class="container py-md-3">
            <div class="row">
                {/* product left */}
                <div class="side-bar col-lg-4">

                    <div class="search-bar w3layouts-newsletter">
                        <h3 class="sear-head">Search Here..</h3>
                        <form action="#" method="post" class="d-flex">
                            <input type="search" placeholder="Product name..." name="search" class="form-control" required="" />
                            <button class="btn1"><span class="fa fa-search" aria-hidden="true"></span></button>
                        </form>
                    </div>
                    {/*preference */}
                    <div class="left-side my-4">
                        <h3 class="sear-head">Occasion</h3>
                        <ul class="w3layouts-box-list">
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">Casuals</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">Party</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">Wedding</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">Ethnic</span>
                            </li>
                        </ul>
                    </div>
                    {/* discounts */}
                    <div class="left-side">
                        <h3 class="sear-head">Discount</h3>
                        <ul class="w3layouts-box-list">
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">5% or More</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">10% or More</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">20% or More</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">30% or More</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">50% or More</span>
                            </li>
                            <li>
                                <input type="checkbox" class="checked" />
                                <span class="span">60% or More</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* reviews */}
            <div class="customer-rev left-side my-4">
                <h3 class="sear-head">Customer Review</h3>
                <ul class="w3layouts-box-list">
                    <li>
                        <Link to="#">
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span>5.0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span>4.0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star-half-o" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span>3.5</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span>3.0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star" aria-hidden="true"></span>
                            <span class="fa fa-star-half-o" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span class="fa fa-star-o" aria-hidden="true"></span>
                            <span>2.5</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* deals */}
            <div class="deal-leftmk left-side">
                <h3 class="sear-head">Special Deals</h3>
                <div class="special-sec1 row mb-3">
                    <div class="img-deals col-md-4">
                        <img src="images/s4.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="img-deal1 col-md-4">
                        <h3>Shuberry Heels</h3>
                        <Link to="/shop-single">$180.00</Link>
                    </div>

                </div>
                <div class="special-sec1 row">
                    <div class="img-deals col-md-4">
                        <img src="images/s2.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="img-deal1 col-md-8">
                        <h3>Chikku Loafers</h3>
                        <Link to="/shop-single">$99.00</Link>
                    </div>

                </div>
                <div class="special-sec1 row my-3">
                    <div class="img-deals col-md-4">
                        <img src="images/s1.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="img-deal1 col-md-8">
                        <h3>Bella Toes</h3>
                        <Link to="/shop-single">$165.00</Link>
                    </div>

                </div>
                <div class="special-sec1 row">
                    <div class="img-deals col-md-4">
                        <img src="images/s5.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="img-deal1 col-md-8">
                        <h3>Red Bellies</h3>
                        <Link to="/shop-single">$225.00</Link>
                    </div>

                </div>
                <div class="special-sec1 row mt-3">
                    <div class="img-deals col-md-4">
                        <img src="images/s3.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="img-deal1 col-md-8">
                        <h3>(SRV) Sneakers</h3>
                        <Link to="/shop-single">$169.00</Link>
                    </div>

                </div>
            </div>

            {/* //product left */}
            {/* product right */}
            <div class="left-ads-display col-lg-8">
                <div class="row">
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s1.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Bella Toes </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$675.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s2.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Chikku Loafers </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$475.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s3.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">(SRV) Sneakers </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$575.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men my-lg-4">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s4.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Shuberry Heels</Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$575.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men my-lg-4">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s5.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Red Bellies </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$575.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men my-lg-4">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s6.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Catwalk Flats </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$575.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s7.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Running Shoes </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$675.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s8.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Sukun Casuals </Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price ">
                                        <span class="money ">$775.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                            <div class="men-thumb-item">
                                <img src="images/s9.jpg" class="img-fluid" alt="" />
                                <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                                <h4>
                                    <Link to="/shop-single">Bank Sneakers</Link>
                                </h4>

                                <div class="product_price">
                                    <div class="grid-price">
                                        <span class="money">$875.00</span>
                                    </div>
                                </div>
                                <ul class="stars">
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
                                    <li><Link to="#"><span class="fa fa-star-o" aria-hidden="true"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                </div >
                <div class="grid-img-right mt-4 text-right">
                    <span class="money">Flat 50% Off</span>
                    <Link to="/shop-single" class="btn">Shop Now</Link>
                </div>
            </div >
        </div >
        {/* </section > */}
        {/* //contact */}
        {/* footer */}
        <footer>
            <div class="container">
                <div class="row footer-top">
                    <div class="col-lg-4 footer-grid_section_w3layouts">
                        <h2 class="logo-2 mb-lg-4 mb-3">
                            <Link to="/"><span class="fa fa-bold" aria-hidden="true"></span>ootie</Link>
                        </h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h4 class="sub-con-fo ad-info my-4">Catch on Social</h4>
                        <ul class="w3layouts_social_list list-unstyled">
                            <li>
                                <Link to="#" class="w3pvt_facebook">
                                    <span class="fa fa-facebook-f"></span>
                                </Link>
                            </li>
                            <li class="mx-2">
                                <Link to="#" class="w3pvt_twitter">
                                    <span class="fa fa-twitter"></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" class="w3pvt_dribble">
                                    <span class="fa fa-dribbble"></span>
                                </Link>
                            </li>
                            <li class="ml-2">
                                <Link to="#" class="w3pvt_google">
                                    <span class="fa fa-google-plus"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-8 footer-right">
                        <div class="w3layouts-news-letter">
                            <h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">Newsletter</h3>

                            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                            <form action="#" method="post" class="w3layouts-newsletter">
                                <input type="email" name="Email" placeholder="Enter your email..." required="" />
                                <button class="btn1"><span class="fa fa-paper-plane-o" aria-hidden="true"></span></button>

                            </form>
                        </div>
                        <div class="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                            <div class="col-md-4 footer-grid_section_w3layouts">
                                <h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">Information</h3>
                                <ul class="list-unstyled w3layouts-icons">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="#">Gallery</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="#">Services</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4 footer-grid_section_w3layouts">
                                {/* social icons */}
                                <div class="agileinfo_social_icons">
                                    <h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">Customer Service</h3>
                                    <ul class="list-unstyled w3layouts-icons">

                                        <li>
                                            <Link to="#">About Us</Link>
                                        </li>
                                        <li class="mt-3">
                                            <Link to="#">Delivery & Returns</Link>
                                        </li>
                                        <li class="mt-3">
                                            <Link to="#">Waranty</Link>
                                        </li>
                                        <li class="mt-3">
                                            <Link to="#">Terms & Condition</Link>
                                        </li>
                                        <li class="mt-3">
                                            <Link to="#">Privacy Plolicy</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* social icons */}
                            </div>
                            <div class="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                                <h3 class="footer-title text-uppercase text-wh mb-lg-4 mb-3">Contact Info</h3>
                                <div class="contact-info">
                                    <div class="footer-address-inf">
                                        <h4 class="ad-info mb-2">Phone</h4>
                                        <p>+121 098 8907 9987</p>
                                    </div>
                                    <div class="footer-address-inf my-4">
                                        <h4 class="ad-info mb-2">Email </h4>
                                        <p><Link to="/mailto:info@example.com">info@example.com</Link></p>
                                    </div>
                                    <div class="footer-address-inf">
                                        <h4 class="ad-info mb-2">Location</h4>
                                        <p>Honey Avenue, New York City</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="cpy-right text-left row">
                            <p class="col-md-10">© 2019 Bootie. All rights reserved | Design by
                                <Link to="/http://w3layouts.com"> W3layouts.</Link>
                            </p>
                            {/* move top icon */}
                            <Link to="#home" class="move-top text-right col-md-2"><span class="fa fa-long-arrow-up" aria-hidden="true"></span></Link>
                            {/* //move top icon */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
