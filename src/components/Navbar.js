import { Outlet } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import Menu from "./Menu";
function Navbar() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 max-w-7xl ml-auto mr-auto -mb-24 z-10 relative lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5 font-semibold text-xl">
              <span className="sr-only">Your Company</span>
              <div className="outer-box p-5 transition duration-150 -z-10 ease-out md:ease-in border-double border-4 animate-pulse absolute inline-flex h-16 w-16 rounded-full shadow-xl  shadow-indigo-900 opacity-85 top-4 -left-4 translate-x-1/4"></div>
              Jyoti Prakash.
            </NavLink>
          </div>
          <Menu />
        </nav>
        <Outlet />
      </header>
    </>
  );
}
export default Navbar;
