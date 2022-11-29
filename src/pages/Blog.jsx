export default function Blog() {
  return (<>

    <Header></Header>

    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active">Blogs</li>
    </ol>

    <section className="ab-info-main py-5">
      <div className="container py-lg-3">
        <div className="ab-info-grids">
          <h3 className="tittle text-center mb-lg-5 mb-3">Blog Posts</h3>
          <div id="products" className="row view-group">

            <PostCard title="Blog Post 1"
              img="images/img2.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$721.00" />

            <PostCard title="Blog Post 2"
              img="images/img3.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$825.00" />

            <PostCard title="Blog Post 3"
              img="images/img4.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$730.00" />

            <PostCard title="Blog Post 4"
              img="images/img5.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$634.00" />

            <PostCard title="Blog Post 5"
              img="images/img6.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$729.00" />

            <PostCard title="Blog Post 6"
              img="images/img7.jpg"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,dolore magna aliquam volutpat."
              price="$620.00" />
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </>)
}

function PostCard({ title, img, text, price }) {
  return (
    <div className="item col-lg-4">
      <div className="thumbnail card">
        <div className="img-event">
          <img className="group list-group-image img-fluid" src={img} alt="" />
        </div>
        <div className="caption card-body">
          <h4 className="group card-title inner list-group-item-heading">{title}</h4>
          <p className="group inner list-group-item-text">{text}</p>
          <div className="row">
            <div className="col-6">
              <p className="lead">{price}</p>
            </div>
            <div className="col-6 ban-buttons">
              <Link className="btn btn-course" to="/single">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
