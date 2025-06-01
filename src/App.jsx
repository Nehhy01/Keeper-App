import './App.css'
import Header from './components-Keeper-app/Header'
import Footer from './components-Keeper-app/Footer'
import Note from './components-Keeper-app/Note.jsx'
import { useState } from 'react'
import 

function App() {
  const [noteList, setNoteList] = useState([])


  return (
    <div className='container'>
      <Header />
  
      <Footer />
    </div>
  )
}

export default App;