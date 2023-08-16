import './App.css';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Roles from '../Roles/Roles';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import VexRobotics from '../WhatisVexRobotics/WhatIsVexRobotics';
import { SoftwareDescription,MechanicalDescription,OutreachDescription,BusinessDescription,ElectricalDescription,DocumentationDescription } from '../Roles/Role-Description/RoleDescription';
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/norm-robotics" element={<AboutUs/>}/>
    <Route path="/roles" element={<Roles/>}></Route>
    <Route path='/vex-robotics' element={<VexRobotics/>}></Route>
    <Route path='/software-description'element={<SoftwareDescription/>}> </Route>
    <Route path='/mechanical-description' element={<MechanicalDescription/>}> </Route>
    <Route path='/electrical-description' element={<ElectricalDescription/>}></Route>
    <Route path='/outreach-description' element={<OutreachDescription/>}></Route>
    <Route path='/business-description' element={<BusinessDescription/>}></Route>
    <Route path='/documentation-description' element={<DocumentationDescription/>}></Route>
  </Route>
)
const route = createBrowserRouter(routeDefinitions)
function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    console.log('its running on lenis')
  }, [])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
