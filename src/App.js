import News from './components/News';
import Navbar from './components/ResponsiveNavbar'
import React, { useState } from 'react'
import Alert from "./components/Alerts";
import LoadingBar from 'react-top-loading-bar'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const darkLightStyle = {
  fontSize: '1.3rem',
  marginRight: '1rem',
  cursor: 'pointer',
}

function App() {
  const [darkIcon, setDarkIcon] = useState(true)
  const [alert, setAlert] = useState(null)
  // const navigate = useNavigate();
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  const toggleMode = () => {
    console.log("toggling")
    if (darkIcon) {
      setDarkIcon(false)
      document.querySelector("#Dark").style.display = 'none'
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      
      
      // Remove border style from all news cards
      const newsCards = document.querySelectorAll(".newsCards");
      newsCards.forEach(card => {
        card.style.border = '2px solid white';
        card.style.backgroundColor = 'rgba(31, 30, 30, 0.76)'
        card.style.borderRadius = '5%';
      });
    }
    else {
      setDarkIcon(true)
      document.querySelector("#Light").style.display = 'none'
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      const newsCards = document.querySelectorAll(".newsCards");
      newsCards.forEach(card => {
        card.style.backgroundColor = 'white'
      });
    }
  }
  const [progress, setProgress] = useState(0)
  const apiKeys = process.env.REACT_APP_NEWS_API_KEY;
  console.log(apiKeys)
  // const apiKeys = '6eea252d71e14e1492695a0507c30471'
  
  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} darkLightStyle={darkLightStyle} darkIcon={darkIcon} />
        <LoadingBar height={3} color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)}/>
        <Alert alert={alert} />
        <Routes>
          {/* we can use key also for each route for remount of component #31  */}
          <Route exact path='/' index element={<News setProgress={setProgress} apiKey={apiKeys} key="general" pageSize={15} country={'in'} category={'general'} />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKeys} key="business" pageSize={15} country={'in'} category={'business'} />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKeys} key="technology" pageSize={15} country={'in'} category={'technology'} />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKeys} key="" pageSize={15} country={'in'} category={'entertainment'} />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKeys} key="entertainment" pageSize={15} country={'in'} category={'health'} />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKeys} key="sports" pageSize={15} country={'in'} category={'sports'} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
