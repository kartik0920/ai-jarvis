export default function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand " href={props.home}>
            <img
              className="nav-logo"
              src="src\assets\logo.png"
              alt="jarvis-logo"
            />
          </a>
          <button
            className="navbar-toggler   btn-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href={props.home} className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href={props.about} className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href={props.contact} className="nav-link">
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
