import './App.css'
import Header from './components-Keeper-app/Header'
import Footer from './components-Keeper-app/Footer'
import Note from './components-Keeper-app/Note.jsx'
import { useState } from 'react'
import Form from './Form.jsx'
import NoteList from './NoteList.jsx'
function App() {
  const [noteList, setNoteList] = useState([{ id: 15, title: "Sample Note", content: "Lorem ipsum dolor inoglobe yfyf jbjj jbbjb jjbjj" }, ]);


  return (
    <div className='container'>
      <Header />
      <Form setNoteList={setNoteList} />
      <NoteList noteList={noteList} />
      <Footer />
    </div>
  )
}

export default App;