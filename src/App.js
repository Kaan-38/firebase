import React, { useEffect, useState } from 'react'
import './App.css';
import database from './firebase';
import { db } from './firebase';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { async } from '@firebase/util';
const App = () => {
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const [name, setName] = useState('') 
  const [login, setLogin] = useState(false)
  const [todos, setTodos] = useState([])
  const [ınput, setInput] = useState('')
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArr)
    }) 
    return () => unsubscribe()
  }, [])
  
   const createTodo = async (e) => {
    e.preventDefault()
    if(ınput === ''){
      console.log('eror');
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: ınput,
      completed: false,
    })
    setInput('')
   }


  return (
    
    <>
      {
        login == true ? (
          <>
            <div className='container-kapsam'>
       <div className='container'>
          <div className='container-input'>
              <input type="text" placeholder='Add Todo...' onChange={((e) => setInput(e.target.value))} />
              <h4 onClick={createTodo}>
                ADD TODO
              </h4>
              <h5>
               HELLO {name}
              </h5>
          </div>

          <div className='container-todo'>
             {
              todos.map((todo) => (
                <span>
                   <h2>
                  {todo.text}
                </h2>
                </span>
              ))
             }
          </div>
       </div>
    </div>
          </>

        ):(
         <>
           <div className='container-login-ortala'>
                <div className='container-login'>
                      <span>
                         <input type="text" placeholder='USERNAME' onChange={((e) => setUsername(e.target.value) )}  />
                      </span>
                      <span>
                        <input type="text" placeholder='PASSWORD' onChange={((e) => setpassword(e.target.value) )} />
                      </span>
                      <h3 onClick={(() =>{
                     if (username == 'Kaan38' && password == '1981Kaan') {
                       setLogin(true)
                       setName('KAAN')
                     }
                     if (username == 'Kaan' && password == 'Kaan') {
                      setLogin(true)
                      setName('KEREM')
                    }

                      })}>
                        LOGİN
                      </h3>
                      
                </div>
           </div>
         </>
        )
      }
    </>
  )
}

export default App
