
import {Landing, Register, Error,Stats,AllJobs,AddJobs,Profile,SharedLayout,ProtectedRoute} from './Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/'  element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
          <Route index element={<Stats/>} />
          <Route path='all-jobs' element={<AllJobs/>} />
          <Route path='add-jobs' element={<AddJobs/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='landing' element={<Landing/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer position='top-center'/>

    </BrowserRouter>
  )
}

export default App