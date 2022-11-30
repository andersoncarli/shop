export default function ({ value, className = '', children }) {
  return (
    <ul className={className || "stars"} >
      <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
      <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
      <li><Link to="#"><span className="fa fa-star" aria-hidden="true"></span></Link></li>
      <li><Link to="#"><span className="fa fa-star-half-o" aria-hidden="true"></span></Link></li>
      <li><Link to="#"><span className="fa fa-star-o" aria-hidden="true"></span></Link></li>
      <span>{children}</span>
    </ul>
  )
}