import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Top Menu Bar */}
      <header className="menu-bar">
        <h1>Bite&Byte</h1>
      </header>

      {/* Landing Page Main Image */}
      <section className="landing-page">
        <div className="main-image">
          <p>Main Image Placeholder</p>
        </div>
      </section>

      {/* Content Boxes */}
      <section className="content-boxes">
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
        <div className="box">Box 4</div>
        <div className="box">Box 5</div>
        <div className="box">Box 6</div>
        <div className="box">Box 7</div>
        <div className="box">Box 8</div>
      </section>
    </div>
  )
}

export default App
