import React from 'react'

const Ratings = ({fiveStars, review, ml}) => {
  return (
    // creating a component to be represented three times in the parent tag by passing down props, and conditionally giving them different stylings
    <div className= {` w-[fit-content] sm3:w-[100%] flex items-center sm3:grid sm3:place-items-center gap-[1.5rem] sm3:gap-[0.5rem] bg-[#f7f2f8] 
    mt-[1rem] ${ml === "2" && "ml-[2rem] lg:ml-[0]"} ${ml === "3" && "ml-[6rem] lg:ml-[0]"} rounded-[10px] p-[1rem_4rem_1rem_2rem] sm3:p-[1rem_0rem_1rem_0rem] `} >
         <span className=" flex gap-[.4rem]">{fiveStars}</span>
         <p className=' text-[15px] text-[#4c304c] font-[700]'>{review}</p>
    </div>
    
  )
}

export default Ratings