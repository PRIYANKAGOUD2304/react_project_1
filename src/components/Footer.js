import React from 'react'


export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
        <button className='btn btn-danger col-2'onClick={()=>{props.resetQuantity()}}>Reset</button>
        <div className='btn btn-dark col-8'>
           {props.totalAmount}
        </div>
        <button className='btn btn-danger col-2'>Pay now</button>
    </div>
  )
}
