export default function ({ icon, title, detail, className = '' }) {
  return (
    <div className="col-lg-3 gd-bottom">
      <div className={"bottom-gd row " + className}>
        <div className="icon-gd col-md-3 text-center"><span className={"fa fa-" + icon} aria-hidden="true"></span>
        </div>
        <div className="icon-gd-info col-md-9">
          <h3 className="mb-2">{title}</h3>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  )
}
