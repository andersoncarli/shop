export default function Shop() {
  return (<>
    <Header>Shop</Header>

    <div className="container py-md-3">
        <div className="search-bar newsletter">
          <h3 className="sear-head">Search Here..</h3>
          <form action="#" method="post" className="d-flex">
            <input type="search" placeholder="Product name..." name="search" className="form-control" required="" />
            <button className="btn1"><span className="fa fa-search" aria-hidden="true"></span></button>
          </form>
        </div>

        <div className="row m-2" style={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Occasion */}
          <div >
            <h3 className="sear-head">Occasion</h3>
            <ul className="box-list">
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
          <div>
            <h3 className="sear-head">Discount</h3>
            <ul className="box-list">
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

          {/* reviews */}
          <div>
            <h3 className="sear-head">Customer Review</h3>
            <div className="box-list">
              <Stars value="5.0" />
              <Stars value="4.0" />
              <Stars value="3.5" />
              <Stars value="3.0" />
              <Stars value="2.5" />
            </div>
          </div>

        </div>
    </div >

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

    <Footer></Footer>
  </>)
}
