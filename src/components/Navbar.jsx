export default function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand " href={props.home}>
            AI JARVIS
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href={props.home}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.about}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.contact}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
