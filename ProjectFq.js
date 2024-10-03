import React from 'react'
import './ProjectFq.css'
import { useState } from 'react'
const FaqAns=({question, answer})=>{

    const [act,setact]=useState(false)

    const ToggleActive=()=>{
          setact(!act);
    }
    return(
        <div className={`faqbody ${act ? "active" : ""}`}>

          
        <div className='Faq-bodycontent' onClick={ToggleActive}>
            <div className='FaqQuestion'>{question}</div>
            <div className='FaqAnswer'>
               <div className='FaqAnswer-content'>
                <p>{answer}</p>
               </div>
            </div>
        </div>
        </div>
    )
}
const FaqAccordian=({data})=>{
    return(
        <div className="faq-container">
        <h2>FAQ</h2>
          {data.map((index)=>(
            <FaqAns key={index.id} question={index.question} answer={index.answer}/>
          ))}
        </div>

    )
}

const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when the data changes."
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code inside JavaScript, which React can then transform into JavaScript objects for rendering."
    },
    {
      id: 3,
      question: "What is the Virtual DOM?",
      answer: "The Virtual DOM is a concept in React where a virtual representation of the actual DOM is kept in memory. React uses this to optimize performance by only updating the parts of the real DOM that have changed."
    }]
export const ProjectFq = () => {
  return (
    <div className='main'>
          <div className='bcgimg'>
                <img src="https://st3.depositphotos.com/1008648/18224/i/450/depositphotos_182247900-stock-photo-businessman-touching-hand-drawn-question.jpg" alt="qb"/>
            </div>
       <FaqAccordian data={faqs}/>

    </div>
  )
}
