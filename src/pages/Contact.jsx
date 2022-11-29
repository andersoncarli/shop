import React from 'react'

export default function Contact() {
    return (<>
        {/* mian-content */}
        <div className="main-banner inner" id="home">
            {/* header */}
            <header className="header">
                <div className="container-fluid px-lg-5">
                    {/* nav */}
                    <nav className="py-4">
                        <div id="logo">
                            <h1> <Link to="/"><span className="fa fa-bold" aria-hidden="true"></span>ootie</Link></h1>
                        </div>

                        <label htmlFor="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu mt-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li>
                                {/* First Tier Drop Down */}
                                <label htmlFor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                                <Link to="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span></Link>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/shop">Shop Now</Link></li>
                                    <li><Link to="/single">Single Page</Link></li>
                                </ul>
                            </li>
                            <li className="active"><Link to="/contact">Contact</Link></li>
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
            <li className="breadcrumb-item active">Contact Us</li>
        </ol>
        {/**/}
        {/*// mian-content */}
        {/* banner */}
        <section className="ab-info-main py-5">
            <div className="container py-3">
                <h3 className="tittle text-center"><span className="sub-tittle">Find Us</span> Contact Us</h3>
                <div className="row contact-main-info mt-5">
                    <div className="col-md-6 contact-right-content">
                        <form action="#" method="post">
                            <input type="text" name="Name" placeholder="Name" required="" />
                            <input type="email" className="email" name="Email" placeholder="Email" required="" />
                            <input type="text" name="Phone no" placeholder="Phone" required="" />
                            <textarea name="Message" placeholder="Message" required=""></textarea>
                            <div className="read mt-3">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 contact-left-content">
                        <div className="address-con">
                            <h4 className="mb-2"><span className="fa fa-phone-square" aria-hidden="true"></span> Phone</h4>
                            <p>+121 098 8907 9987</p>
                            <p>+121 098 8907 9987</p>
                        </div>
                        <div className="address-con my-4">
                            <h4 className="mb-2"><span className="fa fa-envelope-o" aria-hidden="true"></span> Email </h4>
                            <p><Link to="/mailto:info@example.com">info@example.com</Link></p>
                            <p><Link to="/mailto:info@example.com">info@example.com</Link></p>
                        </div>
                        <div className="address-con mb-4">
                            <h4 className="mb-2"><span className="fa fa-fax" aria-hidden="true"></span> Fax</h4>

                            <p>(800) 123-80088</p>
                        </div>
                        <div className="address-con">
                            <h4 className="mb-2"><span className="fa fa-map-marker" aria-hidden="true"></span> Location </h4>

                            <p>Honey Avenue, New York City</p>
                        </div>

                    </div>

                </div>
                <div className="map-fo mt-lg-5 mt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007" allowfullscreen></iframe>
                </div>
            </div>
        </section>


        {/* //contact */}
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
                                <input type="email" name="Email" placeholder="Enter your email..." required=""/>
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
                                <Link to="/http://w3layouts.com"> W3layouts.</Link>
                            </p>
                            {/* move top icon */}
                            <Link to="#home" className="move-top text-right col-md-2"><span className="fa fa-long-arrow-up" aria-hidden="true"></span></Link>
                            {/* //move top icon */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}