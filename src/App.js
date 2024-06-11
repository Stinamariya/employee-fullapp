import logo from './logo.svg';
import './App.css';
import AddEmp from './components/AddEmp';
import ViewEmp from './components/ViewEmp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddEmp/>}/>
      <Route path='/view'element={<ViewEmp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
