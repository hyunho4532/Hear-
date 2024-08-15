import './App.css'
import { Footer } from './component/footer'
import { Sidebar } from './component/sidebar'
import './font.css'

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Sidebar />
        <div className="Video">
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App