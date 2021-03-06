import React, {useState} from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from '../component/LandingPage'


function App() {
  const [value, setValue] = useState(0); // WE OUT IT HERE BECAUSE WE WANT WHEN WE click on footer service tab then the service tab will active 
  const [selectedIndex, setSelectedIndex] = useState(0); // So we put the effect of activiness to be done we take it as props in header.js
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header 
      value={value}
      setValue={setValue}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      />
      <Switch>
        <Route exact path="/" component= {LandingPage}/>{ /*()=><div style = {{height: "2000px"}}>Home</div> */} 
        <Route exact path="/services" component= {()=><div>Services</div>} />
        <Route exact path="/coustomsoftware" component= {()=><div>Coustomsoftware</div>} />
        <Route exact path="/mobileapp" component= {()=><div>Mobileapp</div>} />
        <Route exact path="/websites" component= {()=><div>Website</div>} />
        <Route exact path="/revolution" component= {()=><div>The Revolution</div>} />
        <Route exact path="/about" component= {()=><div>About</div>} />
        <Route exact path="/contact" component= {()=><div>Contact</div>} />
        <Route exact path="/estimate" component= {()=><div>Estimate</div>} />

      </Switch>
      <Footer
      value={value}
      setValue={setValue}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
