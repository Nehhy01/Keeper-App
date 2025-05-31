import './App.css'
import Header from './components-Keeper-app/Header'
import Footer from './components-Keeper-app/Footer'
import Note from './components-Keeper-app/Note.jsx'
import LoginForm from './components-Keeper-app/LoginForm.jsx'
import { useState } from 'react'

function App() {
  const [noteList, setNoteList] = useState([])

  const handleNotes = (notes) => {
   return <Note
    key={notes.key}
    id={notes.key}
    title={notes.title}
    content={notes.content}
    />
  }
  return (
    <div className='container'>
      <Header />
      {/* <div>

      {notes.map(handleNotes)}
        </div>   */}
        {/* <LoginForm /> */}
      <Footer />
    </div>
  )
}

export default App;