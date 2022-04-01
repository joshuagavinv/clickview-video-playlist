import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </header>
  )
}

export default Layout;