import React from 'react'
import "./Page2.css"
export default function Page2main() {

   let [arr,setarr] = React.useState(()=>{
      let saved = localStorage.getItem("applications")
      return saved ? JSON.parse(saved): []
   })

   let [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    portfolio: "",
    description: ""
  });




    function handleChange(e){
      let {name ,value} = e.target
      setFormData({...formData,[name]:value})
    }

   function submit(e){
    e.preventDefault()
   
    let updatedArr = [...arr, formData];
    setarr(updatedArr);


      localStorage.setItem("applications", JSON.stringify(updatedArr));

     alert(`✅ ${formData.name}, your application has been submitted successfully!`);
    

     
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      portfolio: "",
      description: ""
    });

    e.target.reset()
   }

    React.useEffect(() => {
         console.log("Applications:", arr);
     }, [arr]);
   


    return (
    <div className='Page2-container'>
      {/* <div className="left">
      <h1 className='page-h1'>Frontend Engineer (React)</h1>

    <div className="Page2-about">
        <h3 className='h3'>About The Role</h3>
        <p className='para'>You'll build responsivee,accessibile interface in React. </p>
        <p className='para'>collabrate with responsivee ,and ship high-quality features</p>
    </div>
    <div className="Page2-Response">
        <h3 className='h3'>Responsibilities</h3>
         <ul className='para2-lists'>
          <li className='para'>Build responsive interface in React </li>
          <li className='para'>Collabrate With disigners </li>
          <li className='para'>Ship-high Qualities</li>
         </ul>
    </div>
    <div className="Page2-Need">
        <h3 className='h3'>What You'll Need</h3>
        <p className='para'> React </p>
        <p className='para'> TypeScript</p>
    </div>

     
    </div> */}
    <div className="left">
  <h1 className='page-h1'>Frontend Engineer (React)</h1>

  <div className="Page2-Instructions">
      <h3 className='h3'>Instructions for Applicants</h3>
      <ul className='para2-lists'>
          <li className='para'>Fill out all required fields marked with *</li>
          <li className='para'>Ensure your email and phone number are correct for communication</li>
          <li className='para'>Portfolio link is optional but recommended</li>
          <li className='para'>Provide a short and clear description about yourself</li>
          <li className='para'>Double-check your details before submitting</li>
      </ul>
  </div>

  <div className="Page2-about">
      <h3 className='h3'>About The Role</h3>
      <p className='para'>You'll build responsive, accessible interface in React.</p>
      <p className='para'>Collaborate with designers, and ship high-quality features</p>
  </div>

  <div className="Page2-Response">
      <h3 className='h3'>Responsibilities</h3>
      <ul className='para2-lists'>
          <li className='para'>Build responsive interfaces in React</li>
          <li className='para'>Collaborate with designers</li>
          <li className='para'>Ship high-quality features</li>
      </ul>
  </div>
  </div>
    <div className="right">
        <h1 className='page-h' >Application Form</h1>


       <form  className='form-input' onSubmit={submit}>
        <div className="inputs">
         <div className="name">
            <label>Full name:</label>
            <input  name="name" className='input-page2' type="text" placeholder='Enter Your Full Name' onChange={handleChange}  required/>
         </div>
         <div className="name">
            <label>EMAIL:</label>
            <input  name="email" className='input-page2' type="email" placeholder='Enter Your Email' onChange={handleChange} required />
         </div>
         <div className="name">
            <label>Phone:</label>
            <input name='phone' className='input-page2' type="text" placeholder='Enter Your Mobile number' onChange={handleChange} required />
         </div>
         <div className="name">
            <label> Catagory:</label>
            <input  name="category" className='input-page2' type="text" placeholder='Enter Your Catagory' onChange={handleChange} required />
         </div>
         <div className="name">
            <label> Portfolio: </label>
            <input  name="portfolio" className='input-page2' type="text" placeholder=' optional' onChange={handleChange} required />
         </div>
         <div className="name">
            <label> discription: </label>
            <textarea  name="description" className='input-page3' placeholder='Enter Your  bio' onChange={handleChange} type='dis' />
         </div>
            <div className="botton-wrap">
               
               <button className='Form-submit'>SUBMIT</button>
            </div>
         </div>
         
       </form>

    </div>

    </div>
  )
}
