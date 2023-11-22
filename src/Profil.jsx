import React from 'react'
import PersonalInfo from './PersonalInfo.jsx'
import Name from './Name.jsx'
import Email from './Email.jsx'
import Adress from './Adress.jsx'
import './Profil.css'
const Profil = () => {
  return (
   <div>
    <Name/>
    <PersonalInfo/>
    <Email/>
    <Adress/>
   </div>
  )
}

export default Profil