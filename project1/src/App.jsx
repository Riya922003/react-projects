import './App.css'

function App() {
  return (
    <div>
        <div className="container">
            <nav>
            <div className="logo">
                <a href="#">Portfo<span>lio.</span></a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="buttons">
                <a href="#" className="login">Log in</a>
                <a href="#" className="btn">Register</a>
            </div>
            </nav>
            <div className="content">
            <h2>Hello,</h2>
            <h2>Its Me CoderGirl</h2>
            <p>Im A Web Developer & Designer. I Will Make Your Project Beautiful And Attractive,You Can Find Me On GitHub</p>
            </div>
            <div className="link">
            <a href="#" className="hire">Hire Me</a>
            </div>
        </div>
  </div>
  )
}
export default App



