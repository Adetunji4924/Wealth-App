import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './sign-in'
import ForgotPassword from './Pages/forget-password'
import CreateAccount from './Pages/create-account'
import BasicInformation from './Pages/basic-info'
import Customers from './Dashboard/customers'
import Dashboard from './Dashboard/dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/basic-info' element={<BasicInformation />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/customers' element={<Customers />}></Route>
      </Routes>
    </Router>
  )
}

export default App