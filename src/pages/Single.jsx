import React from 'react'

export default function Single() {
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
                                    <li><Link to="/single">Single Page</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    {/* //nav */}
                </div>
            </header>
            {/* //header */}

        </div>
        {/*//main-content*/}
        {/**/}
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active">Single Page</li>
        </ol>
        {/**/}
        {/* banner */}
        <section class="ab-info-main py-md-5">
            <div class="container py-md-3">
                <h3 class="tittle text-center mb-lg-5 mb-3"> Single Page</h3>
                <div class="speak px-lg-5">
                    <div class="row mt-lg-5 mt-4">
                        <div class="col-md-12 events-img">
                            <img src="images/single.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="col-md-12 events-info my-3">
                            <h3><span class="sub-tittle">01</span> Tech beauty</h3>
                            <h4 class="my-3"><Link to="#" class="text-dark">VIVAMUS ID TEMPOR FELIS. CRAS SAGITTIS MI SIT AMET</Link></h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat..</p>
                        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat..</p>
                    </div>
                    <div class="row my-lg-5 my-3">
                        <div class="col-md-6 text-info">
                            <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor elementum id enim volutpat...</p>
                        </div>
                        <div class="col-md-6 team-img">
                            <img src="images/img6.jpg" class="img-fluid" alt="user-image" />
                        </div>
                    </div>
                    <div class="single-form-left">
                        {/* contact form grid */}
                        <div class="contact-single">
                            <h3><span class="sub-tittle">01</span> Leave a Reply</h3>
                            <form action="#" method="get" class="mt-4">
                                <div class="form-group">
                                    <label htmlFor="contactcomment">Your Comment *</label>
                                    <textarea class="form-control border" rows="5" id="contactcomment" required=""></textarea>
                                </div>
                                <div class="d-sm-flex">
                                    <div class="col-sm-6 form-group p-0">
                                        <label htmlFor="contactusername">Name *</label>
                                        <input type="text" class="form-control border" id="contactusername" required="" />
                                    </div>
                                    <div class="col-sm-6 form-group ml-sm-3">
                                        <label htmlFor="contactemail">Email *</label>
                                        <input type="email" class="form-control border" id="contactemail" required="" />
                                    </div>
                                </div>
                                <button type="submit" class="mt-3 btn btn-success btn-block py-3">Post Comment</button>
                            </form>
                        </div>
                        {/*  //contact form grid ends here */}
                    </div>
                    <div class="media py-5">
                        <img src="images/te2.jpg" class="mr-3 img-fluid rounded-circle" alt="image" />
                        <div class="media-body">
                            <h5 class="mt-0">Daniel Doe</h5>
                            <p class="mt-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                            </p>
                            <div class="media mt-5">
                                <Link class="pr-3" href="#">
                                    <img src="images/te1.jpg" class="img-fluid rounded-circle" alt="image" />
                                </Link>
                                <div class="media-body">
                                    <h5 class="mt-0">Leia Organa</h5>
                                    <p class="mt-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla..</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
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
        {/* //footer */}
    </>)
}