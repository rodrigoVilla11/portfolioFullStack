import React,{useState} from 'react'
import { useEffect } from 'react';
import {useTranslation} from "react-i18next"


const Contact = () => {
  const {t, i18n} = useTranslation(["contact"])

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>{
    const property = e.target.name;
    const value = e.target.value

    e.preventDefault();
    setForm({...form, [property]: value})
  }

  const handleSubmit = (e) => {
        if(!form.name || !form.email || !form.message){
            alert("Please complete the form correctly.");
        }else{
            /*SEND EMAIL ACA */
            alert("Message send successfully")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }
  }
  return (
    <div className=' bg-eggshell w-full h-screen flex flex-col justify-center items-center'>
        <h2 className='p-10 text-4xl '>{t("title")}</h2>
        <p className=' text-xl px-24'>{t("sub_title")}</p>
        <form onSubmit={handleSubmit} className='bg-white w-2/3 h-72 flex flex-col justify-center items-center mt-10 rounded-xl'>
            <div>
              <label htmlFor="name">{t("label_name")}</label>
            </div>
            <div className=' w-full h-12 flex justify-center rounded-xl'>
              <input  onChange={handleChange} className='bg-eggshell w-1/2 h-full text-2xl rounded-xl  focus:outline-none' type="text" name="name" />
            </div>

            <div>
              <label htmlFor="email">{t("label_email")}</label>
            </div>
            <div  className='w-full h-12 flex justify-center rounded-xl'>
              <input onChange={handleChange} className='bg-eggshell w-1/2 h-full text-2xl rounded-xl focus:outline-none' type="text" name="email" />
            </div>

            <div>
              <label htmlFor="message">{t("label_message")}</label>
            </div>
            <div  className='w-full h-28 flex justify-center rounded-xl'>
              <textarea onChange={handleChange} className='bg-eggshell w-1/2 h-full text-2xl rounded-xl focus:outline-none' type="text" name="message" />
            </div>

            <button type="submit" className='h-20 w-64 hover:shadow-2xl bg-spacecadet rounded-xl my-4 flex items-center justify-center text-white hover:bg-indigo hover:cursor-pointe'>{t("button_submit")}</button>  
        </form>
    </div>
  )
}

export default Contact