import BottomBar from "@/components/navigation/bottombar/bottomDock";
import TopBar from "@/components/navigation/topbar/topbar";
import Landing from "@/pages/landing/landing";

import './styles/utility/selections.css'
import '../components/buttons/buttons.css'

export default function Home() {
  return (
    <>
      <TopBar/>
      <Landing/>
      <BottomBar />
    </>
  );
}
