import React,{useState} from 'react'
import { useEffect } from 'react';
import {useTranslation} from "react-i18next"
import axios from "axios"


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

  // const sendEmail = () => {
  //   window.Email.send({
  //     SecureToken: '58e24c2b-1c71-4b5e-937d-3c1b7adfd95d', 
  //     To: "villarrealrodrigo.n@gmail.com",
  //     From: 'portfoliorodrigo3@gmail.com',
  //     Subject: 'PORTFALIO CONTACT FROM ' + form.email,
  //     Body: `Name: ${form.name}, Email: ${form.email} Message: ${form.message}`
  //   }).then(
  //     message => alert('Correo electrónico enviado con éxito: ' + message)
  //   );
  // };

  //  const sendEmail = async () => {
  //   const apiKey = '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';

  //   try {
  //     await axios.post('https://api.sendgrid.com/v3/mail/send', {
  //       personalizations: [
  //         {
  //           to: [{ email: "villarrealrodrigo.n@gmail.com" }]
  //         }
  //       ],
  //       from: { email: 'portfoliorodrigo3@gmail.com' },
  //       subject:` PORTFALIO CONTACT FROM ${form.email}`,
  //       content: [
  //         {
  //           type: 'text/plain',
  //           value: `Name: ${form.name}, Email: ${form.email} Message: ${form.message}`
  //         }
  //       ]
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${apiKey}`
  //       }
  //     });

  //     alert('Correo electrónico enviado con éxito');
  //   } catch (error) {
  //     console.error('Error al enviar el correo electrónico', error);
  //     alert('Error al enviar el correo electrónico');
  //   }
  // };


  const handleSubmit = async (e) => {
        if(!form.name || !form.email || !form.message){
            alert("Please complete the form correctly.");
        }else{
          try {
            await axios.post('https://back-portfolio-jg2q.onrender.com/send-email', form);
            alert('Email send successfully');
          } catch (error) {
            console.error('Error sending email', error);
            alert('Error sending email');
          }
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