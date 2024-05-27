import './App.css';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'
import ProtectedRoute from './components/Router/ProtectedRoute';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route element={<ProtectedRoute/>} >
          <Route path="/" element={<Chat/>} />
          </Route>
          <ProtectedRoute exact path="/" component={Chat} /> */}
           <Route exact path="/" element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
 
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}


// function App() {
//   return (
//     <Router>
//     <div className="App">
//      <Routes>
//         {/* <Route exact path='/' component={Chat} />
//         <Route path='/login' component={Login}/>
//         <Route path='/register' component={Register}/>
//         <Route render={ ()=> <h1>404 page not found</h1> }/> */}

//         <Route path="/" element={Chat} />
//         <Route path="/login" element={Login}/>
//         <Route path="/register" element={Register}/>
        
//         <Route path="*"  element={ <h1>404 page not found</h1>}/>


//      </Routes>
//     </div>
//   </Router>
// );

// }

export default App;
