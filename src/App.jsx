import { Outlet } from "react-router-dom"
import { Footer, Header} from "./components"

function App() {

  return (
    <main className="">
      <Header className=" overflow-x-hidden"/>     
      <Outlet/> 
      <Footer />
    </main>
  )
}

export default App
