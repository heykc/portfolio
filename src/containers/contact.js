import React from 'react';
import Web from '../svgs/web';
import Itch from '../svgs/itch';
import GitHub from '../svgs/github';
import Android from '../svgs/android';
import Instagram from '../svgs/instagram';

const placeholders = [
  {
    name: "Jessica Day",
    email: "jessday@abcschool.com",
    company: "Academy of Banyon Canyon",
    subject: "School needs new website"
  },
  {
    name: "Nick Miller",
    email: "millertime@netscape.net",
    company: "The Griffin",
    subject: "App for Real Apps!"
  },
  {
    name: "Winston Bishop",
    email: "winnybish@lapd.gov",
    company: "LAPD",
    subject: "Funny prank website?",
  },
  {
    name: "Schmidt",
    email: "tuggromney@utah.gov",
    company: "Associated Strategies",
    subject: "Website for my suits",
  },
  {
    name: "Cecilia Parekh",
    email: "cparekh@boysmgmt.com",
    company: "Cece's Boys",
    subject: "eCommerce for modeling",
  },
]

const field = {
  touched: false,
  value: '',
}

const btnStates = {
  idle: 'IDLE',
  ready: 'READY',
  loading: 'LOADING',
  submitted: 'SENT',
  error: 'ERROR',
}

export default function Contact () {
  const [placeholder] = React.useState(placeholders[Math.floor(Math.random() * placeholders.length)]);
  const [btnState, setBtnState] = React.useState(btnStates.idle) 
  const [errors, setErrors] = React.useState({})
  const [fields, setFields] = React.useState ({
    name: Object.create(field),
    email: Object.create(field),
    company: Object.create(field),
    subject: Object.create(field),
    message: Object.create(field),
  })

  const validate = () => {
    const e = {}
    if(!fields.name.value) {
      e.name = 'Required';
    } else if (fields.name.value.length < 3) {
      e.name = 'Name must be over 3 characters.'
    }
    
    if (!fields.email.value) {
      e.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fields.email.value)) {
      e.email = 'Invalid email address';
    }
    
    if(!fields.message.value) {
      e.message = 'Required';
    } else if (fields.message.value.length > 512) {
      e.message = 'Message cannot exceed 512 characters.'
    }

    if(!Object.keys(e).length && btnState === btnStates.idle)
      setBtnState(btnStates.ready)
    else if (Object.keys(e).length && btnState === btnStates.ready)
      setBtnState(btnStates.idle)


    setErrors(e)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  React.useEffect(validate, [fields])

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(btnStates.loading);
    
    setTimeout(() => {
      setBtnState(btnStates.submitted);
      setFields({
        name: Object.create(field),
        email: Object.create(field),
        company: Object.create(field),
        subject: Object.create(field),
        message: Object.create(field),
      });

      setErrors({});
    }, 3000)

    /*fetch('https://us-central1-portfolio-contact-45fe6.cloudfunctions.net/app/api/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({
        name: fields.name.value,
        email: fields.email.value,
        company: fields.company.value,
        subject: fields.subject.value,
        message: fields.message.value,
      })
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        console.log(res.errors)
      } else if (res.isEmailSend) {
        alert("Should have sent!")
        setFields({
          name: Object.create(field),
          email: Object.create(field),
          company: Object.create(field),
          subject: Object.create(field),
          message: Object.create(field),
        });
        setErrors({});
      }
      return res;
    })
    .catch(err => alert(err.message))*/

  }

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: {
        ...fields[e.target.name],
        value: e.target.value
      }
    })
  }

  const handleBlur = (e) => {
    setFields({
      ...fields,
      [e.target.name]: {
        ...fields[e.target.name],
        touched: true
      }
    })
  }

  return (
    <main id="content" className={"container row c center gutters"}>
      <section className="container lg contact">
        <form onSubmit={handleSubmit}>
          <header>
            <h3>Message me!</h3>
          </header>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input 
              type="text" 
              name="name" 
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={placeholder.name} 
              value={fields.name.value || ''} 
              className={fields.name.touched && errors.name ? 'bad' : ''}
            />
            {fields.name.touched && errors.name && <small className="bad">{errors.name}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input 
              type="text" 
              name="email" 
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={placeholder.email} 
              value={fields.email.value || ''} 
              className={fields.email.touched && errors.email ? 'bad' : ''}
            />
            {fields.email.touched && errors.email && <small className="bad">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input 
              type="text" 
              name="company" 
              onChange={handleChange}
              placeholder={placeholder.company} 
              value={fields.company.value || ''} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              name="subject" 
              onChange={handleChange}
              placeholder={placeholder.subject} 
              value={fields.subject.value || ''} 
            />
          </div>
          <div className="form-group full">
            <label htmlFor="email">Message*</label>
            <textarea 
              name="message" 
              placeholder="What's on your mind?" 
              maxLength="512"
              onChange={handleChange}
              onBlur={handleBlur}
              value={fields.message.value || ''}
              className={fields.message.touched && errors.message ? 'bad' : ''}
            />
            {fields.message.touched && errors.message && <small className="bad">{errors.message}</small>}
          </div>
          {btnState === btnStates.idle && <button type="button" disabled className="standard idle">Send</button>}
          {btnState === btnStates.ready && <button type="submit" className="standard good">Send</button>}
          {btnState === btnStates.loading && <button type="button" className="standard loading">Loading...</button>}
          {btnState === btnStates.submitted && <button type="button" className="standard good">Message Sent! &#10004;</button>}
          {btnState === btnStates.error && <button type="button" className="standard bad">Error</button>}
          
        </form>
        <div className="separator">
          <div className="l"></div>
          <div className="circ">and</div>
          <div className="l"></div>
        </div>
        <section className="social">
          <header>
            <h3>Follow me!</h3>
          </header>
          <div className="icons">
            <a className="git" href="https://github.com/heykc" target="_blank"><GitHub /></a>
            <a className="and" href="#"><Android /></a>
            <a className="itch" href="https://coffinatedgames.itch.io/" target="_blank"><Itch /></a>
            <a className="inst" href="https://www.instagram.com/coffinatedgames/" target="_blank"><Instagram /></a>
          </div>
        </section>
      </section>
    </main>
  )
}