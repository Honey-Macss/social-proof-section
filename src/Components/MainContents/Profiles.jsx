
const Profiles = ({img, name, status, comment, mt}) => {
  return (
    // creating a component to be represented three times in the parent 
    // tag by passing down props, and conditionally giving them different stylings
    <div className={` w-[21.5rem] h-[fit-content] p-[2rem] li:p-[1rem] bg-[#511f50] rounded-[7px] ${mt === "2" && "mt-[2rem] md2:mt-[0]"} ${mt === "3" && "mt-[4rem] lg:mt-[0]"}`}>
        <span className=" flex items-center gap-[2rem] ">
            <img className=" w-[3.5rem] rounded-full" src={img} alt="buyer" />
            <div>
                <h3 className=" text-[#fefbfe]">{name}</h3>
                <h4 className=" text-[#bf649c]">{status}</h4>
            </div>
        </span>
        <p className=" mt-[1rem] text-[white]">{comment}</p>
    </div>
  )
}

export default Profiles