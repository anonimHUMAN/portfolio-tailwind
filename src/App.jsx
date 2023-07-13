import Left from './Components/Left';
import Navbar from './Components/Navbar';
import RouteHome from './Routes/RouteHome';
import RouteInUp from './Routes/RouteInUp';
import RouteWorks from './Routes/RouteWorks';

export default function App() {
  return (
    <>
      <Navbar />
      <Left />
      <div className='w-full min-h-screen flex justify-end dark:bg-gray-900'>
        <RouteHome />
        <RouteWorks />
        <RouteInUp />
      </div>
    </>
  )
}