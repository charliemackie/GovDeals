import logo from './logo.svg';
import './App.css';
import { GetContracts, ChatBot } from './components/contracts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatBot/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
