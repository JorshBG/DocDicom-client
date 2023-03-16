import {
  FaGithub,
  FaAngleDown,
  FaHamburger /* Temporal icon (Hamburger -> MenuLines) */,
} from "react-icons/fa"; /* Temporal icon (GitHub -> UseImage) */

function NavBar() {
  return (
    <div
      className="drawer-content"
      style={{
        scrollBehavior: "smooth",
        scrollPaddingTop: "5rem",
      }}>
      <div className="sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-all duration-100 text-base-content">
        <nav className="navbar w-full">
          <div className="flex flex-1">
            <span className="tooltip tooltip-bottom">
              <label
                htmlFor="drawer"
                className="btn btn-btn-square btn-ghost drawer-button lg:hidden">
                {/* Temporal icon (Hamburger -> MenuLines) */}
                <FaHamburger className="w-6 h-6" />
              </label>
            </span>
          </div>
          <div className="flex-0">
            <div className="dropdown dropdown-end">
              <div
                className="btn btn-ghost gap-1 normal-case"
                tabIndex="0">
                {/* Temporal icon (GitHub -> UseImage) */}
                <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
                <FaAngleDown className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl">
                <ul
                  className="menu menu-compact gap-1 p-3"
                  tabIndex="0">
                  <li>
                    <button className="flex">
                      <FaGithub className="w-4 h-4" />
                      <span>Setting 1</span>
                    </button>
                  </li>
                  <li>
                    <button className={`flex ${true ? "active" : ""}`}>
                      <FaGithub className="w-4 h-4" />
                      <span>Setting 1</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
