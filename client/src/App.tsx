import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import DesignHeader from "./components/DesignHeader/DesignHeader"
import MainDesignSpace from "./components/MainDesignSpace/MainDesignSpace"
import MainCanvas from "./components/MainCanvas/MainCanvas"

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <div className="content-wrapper">
        <Sidebar></Sidebar>
        <div className="main-design-wrapper">
          <DesignHeader></DesignHeader>
          <MainDesignSpace>
            <MainCanvas />
          </MainDesignSpace>
        </div>
      </div>
    </div>
  )
}

export default App
