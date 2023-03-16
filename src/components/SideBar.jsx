function SideBar() {
  return (
    <div
      className="drawer-side"
      style={{
        scrollBehavior: "smooth",
        scrollPaddingTop: "5rem",
      }}>
      <label
        htmlFor="drawer"
        className="drawer-overlay"></label>
      <aside className="bg-base-200 w-80">
        <div className="bg-base-200 sticky z-20 backdrop-blur top-0 items-center gap-2 px-4 py-2 hidden lg:flex">
          <a href="#">Home</a>
        </div>
        <div className="h-4"></div>
        <ul className="menu menu-compact flex flex-col">
          <li className="pl-1">
            <a href="#">Section 1</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 2</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 3</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 4</a>
          </li>
        </ul>
        <ul className="menu menu-compact flex flex-col">
          <li></li>
          <li className="menu-title">
            <span>Menu 1</span>
          </li>
          <li className="pl-1">
            <a href="#">Section 1</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 2</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 3</a>
          </li>
          <li className="pl-1">
            <a href="#">Section 4</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
