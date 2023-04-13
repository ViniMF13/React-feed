import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
             author='Vini Sim'
             content='Engenharia de Sistemas'
          />
          <Post
             author='Albert Einstein'
             content='Rela na atividade'
          />
          <Post
             author='samu'
             content='SIstemas de Info'
          />
        </main>
      
      </div>
    
    </div>
  )
}

export default App
