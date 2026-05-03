import BottomBar from "@/components/navigation/bottombar/bottomDock";
import TopBar from "@/components/navigation/topbar/topbar";
import Landing from "@/components/landing/landing";

import './styles/utility/selections.css'

export default function Home() {
  return (
    <>
      <TopBar/>
      <Landing/>
      <BottomBar />
    </>
  );
}
