import React from 'react';

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

export default function Contact () {
  const [placeholder] = React.useState(placeholders[Math.floor(Math.random() * placeholders.length)]);
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

    setErrors(e)
  }

  React.useEffect(validate, [fields])

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://us-central1-portfolio-contact-45fe6.cloudfunctions.net/app/api/contacts', {
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
        //handle success
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
    .catch(err => alert(err.message))

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
    <section className="modal">
      <form onSubmit={handleSubmit}>
        <header>
          <h3>Message me anytime!</h3>
        </header>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input 
            type="text" 
            name="name" 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder.name} 
            defaultValue={fields.name.value} 
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
            defaultValue={fields.email.value} 
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
            defaultValue={fields.company.value} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            name="subject" 
            onChange={handleChange}
            placeholder={placeholder.subject} 
            defaultValue={fields.subject.value} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Message*</label>
          <textarea 
            name="message" 
            placeholder="What's on your mind?" 
            maxLength="512"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={fields.message.value}
            className={fields.message.touched && errors.message ? 'bad' : ''}
          />
          {fields.message.touched && errors.message && <small className="bad">{errors.message}</small>}
        </div>
          <button type="submit" className="standard good">Send</button>
      </form>

    </section>
  )
}