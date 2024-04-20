import React from 'react'
import Accordion from './Accordion'
import { CONTACTUS } from '@/constants'
const ContactUs = () => {
  return (
   <section className='padding'>
      <h1 className='font-palanquin font-bold text-3xl pb-3'>
      Contact Us
    </h1>
   <div className="container mx-auto ">
    {CONTACTUS.map(contactus=>(

<Accordion  key={contactus.id} title={contactus.title}>

<p className='px-8 py-6'>
  {contactus.content}
</p>
</Accordion>
    ))}
 
    </div>

   </section>
  )
}

export default ContactUs
