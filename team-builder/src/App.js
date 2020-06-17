import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import Form from './Form'
import Associate from './TeamMembers'
import './App.css'

const initialTeamList = [
  {
      id:uuid(),
      name: 'Michael Scott',
      email: 'thisismyemail@email.com',
      role: 'SUPER MEGA EPIC WEB DEV',
  },
]

const initialFormValues = {
  name: '',
  mail: '',
  role: '',
}


export default function App() {
  const [associates, setAssociate] = useState(initialTeamList)
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const {name, value} = evt.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.name || !formValues.email || !formValues.role){
      setError('uhhh')
      return
    }
  

    const newAssociate = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }

    setAssociate(associates => [newAssociate, ...associates])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header className="App-header">Team Builder</header>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <span style={{color:'red'}}>{error}</span>
      {
        associates.map(associate => {
        return (
          <Associate key={associate.id} details={associate} />
        )
      })
      
      }
    </div>
  )
}