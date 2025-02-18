import { Suspense, useState, useEffect } from 'react'
import { DataTable } from './DataTable'
import './App.css'


function App() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return !show ? (null) : (
    <>
    <Suspense fallback={<h1>Loading...</h1>}/>
      <DataTable />
    </>
  )
}

export default App
