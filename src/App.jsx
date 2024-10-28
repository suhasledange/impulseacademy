import { Outlet } from "react-router-dom"
import { Footer, Header} from "./components"

function App() {

  return (
    <div className="">
      <Header className=" overflow-x-hidden"/>     
      <Outlet/> 
      <Footer />
    </div>
  )
}

export default App
