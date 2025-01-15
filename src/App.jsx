import "./App.css"

import { Route,Routes } from "react-router-dom"
import { Homepage } from "@/pages/home/Homepage"
import { ArticleDetail } from "./pages/articleDetail/ArticleDetail"

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage/>}/>
        <Route path="/blog/:id" element={<ArticleDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
