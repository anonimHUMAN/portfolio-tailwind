import Navbar from './Navbar';
import Left from './Left';
import Cards from './Cards';

export default function App() {

  return (
    <>
      <div className='w-full flex justify-end  dark:bg-gray-900 h-screen'>
        <Navbar />
        <Left />
        <div className='w-9/12 flex justify-start flex-wrap gap-x-7	'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  )
}