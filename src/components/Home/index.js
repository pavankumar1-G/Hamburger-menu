// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-conatiner">
    <Header />
    <div className="home-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="sm-home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-home-img"
      />
    </div>
  </div>
)
export default Home
