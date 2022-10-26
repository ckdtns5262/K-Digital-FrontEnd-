
import './components/My06.css';
import { Route,Routes } from 'react-router-dom';
import MvList26 from './project/MvList26';
import MvInfoMain26 from './project/MvInfoMain26'




function App() {

  
  
  return (
    <>
   <Routes>
    <Route path='/' element={<MvList26/>}/>
    <Route path='/MvInfoMain26/:mvcd' element={<MvInfoMain26/>}/>
   </Routes>
  
   
   </>
  );
}

export default App;
