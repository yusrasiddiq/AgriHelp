import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import WeatherComponent from "../components/WeatherComponent";

export default function Weather() {
  return (
    <>
      <TopBar title={"Weather"} />
      <Sidebar />
      <WeatherComponent />
    </>
  );
}
