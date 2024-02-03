
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout'
function App() {
  return (
 <PageLayout >
    <Routes>
      <Route path='/' element ={<HomePage /> }/>
      <Route path='/auth' element={<AuthPage />}/>
      <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
  </PageLayout>);
  
}

export default App;
