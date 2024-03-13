import React from 'react'

const ExperienceCardRecevedProps = (props) => {
  return (
    <div className='experience__content border rounded shadow-sm p-5'>
        <h4>{props.title}</h4>
        <p>{props.company}</p>
        <p>{props.dateJob}</p>
        {props.skillOption}      
        <div className='experience__cercel'></div>
        <div className='experience__line'></div>
    </div>
  )
}

export default ExperienceCardRecevedProps