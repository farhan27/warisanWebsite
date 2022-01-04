
import { Button } from '@material-ui/core';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={()=> <div>Home</div>}></Route>
          <Route exact path="/services" element={()=> <div>Home</div>}></Route>
          <Route exact path="/customsoftware" element={()=> <div>Home</div>}></Route>
          <Route exact path="/mobileapps" element={()=> <div>Home</div>}></Route>
          <Route exact path="/website" element={()=> <div>Home</div>}></Route>
          <Route exact path="/revolution" element={()=> <div>revolution</div>}></Route>
          <Route exact path="/about" element={()=> <div>about</div>}></Route>
          <Route exact path="/contact" element={()=> <div>contact</div>}></Route>
          <Route exact path="/estimate" element={()=> <div>estimate</div>}></Route>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
