import Menu from "./Menu";
import TopBar from "./TopBar";

export default function header() {
  return (
    <div className="header">
      <TopBar />
      <Menu />
    </div>
  );
}
