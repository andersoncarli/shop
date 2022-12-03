export default function ({ img, name, price, stars }) {
  return (
    <div className="col-md-4 product-men">
      <div className="product-shoe-info shoe text-center">
        <div className="men-thumb-item">
          <img src={img} className="img-fluid" alt="" />
          <span className="product-new-top">New</span>
        </div>
        <div className="item-info-product">
          <h4>
            <Link to="/shop-single">{name}</Link>
          </h4>

          <div className="product_price">
            <div className="grid-price">
              <span className="money">{price}</span>
            </div>
          </div>
          <Stars value={stars} />
        </div>
      </div>
    </div>
  )
}