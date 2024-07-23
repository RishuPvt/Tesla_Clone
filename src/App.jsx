
import './App.css'
import Header from './Components/Header';
import ModelX from './Components/ModelX';
import ModelY from './Components/ModelY';
import ModelS from './Components/ModelS';
import CyberTruck from"./Components/CyberTruck";
import Solarwall from "./Components/SolarWall"
import Solarroof from "./Components/Solarroof"
function App() {
    return (
        <>
        <div>
          <Header />
          <ModelY/>
          <ModelX/>
          <ModelS/>
          <CyberTruck/>
          <Solarroof/>
          <Solarwall/>

        </div>
         </>
    )
   

}

export default App
