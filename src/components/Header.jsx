export default function Header({ children }) {

  let inner = typeof children == 'string' ? ' inner' : ''

  return (<>
    <div className={"main-banner" + inner} id="home">
      <header className="header">
        <div className="container-fluid px-lg-5">

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
                  <li><Link to="/shop-single">Shop Single</Link></li>
                  <li><Link to="/single">Single Page</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

        </div>
      </header>

      {!inner && children}

    </div>

    {!!inner &&
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">{children}</li>
      </ol>}
  </>)
}