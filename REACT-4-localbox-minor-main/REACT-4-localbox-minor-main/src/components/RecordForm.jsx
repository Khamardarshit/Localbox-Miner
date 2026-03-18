import { useState, useEffect } from "react";

function RecordForm({ addRecord, updateRecord, editData }) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")

  useEffect(()=>{

    if(editData){
      setName(editData.name)
      setEmail(editData.email)
      setPhone(editData.phone)
      setCity(editData.city)
    }

  },[editData])

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!name || !email || !phone || !city){
      alert("All fields required")
      return
    }

    if(phone.length !== 10){
      alert("Mobile number must be 10 digits")
      return
    }

    const data = {name,email,phone,city}

    if(editData){
      updateRecord(data)
    }
    else{
      addRecord(data)
    }

    setName("")
    setEmail("")
    setPhone("")
    setCity("")
  }

  return(

    <form onSubmit={handleSubmit} className="form">

      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type="text"
      placeholder="Mobile Number"
      value={phone}
      maxLength="10"
      onChange={(e)=>{

        const value = e.target.value

        if(/^[0-9]*$/.test(value)){
          setPhone(value)
        }

      }}
      />

      <input
      type="text"
      placeholder="City"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />

      <button type="submit">
        {editData ? "Update Record" : "Add Record"}
      </button>

    </form>

  )

}

export default RecordForm;