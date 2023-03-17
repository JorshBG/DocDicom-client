import SideBar from "./SideBar";
import {NavBar} from "./NavBar";

function Dashboard() {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <NavBar />
      <SideBar />
    </div>
  );
}

export default Dashboard;
