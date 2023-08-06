import Ratings from "./Ratings"

const FirstSection = () => {
  // storing the star image in a variable
  const star = <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/></svg>

  // storing multiple stars in a variable as an array
  const stars = [star, star, star, star, star]
  // creating variable that holds mapped stars and returning the stars
   const fiveStars = stars.map((star, index) => {
      return <span className=" " key={index} >{star}</span>
   })

  //  storing the reviews in a variable to be passed down to the child component
   const firstReview = "Rated 5 Stars in Reviews";
   const secondReview = "Rated 5 Stars in Report Guru";
   const thirdReview = "Rated 5 Stars in BestTech";

  return (
    <div className=" flex items-center justify-between lg:grid lg:place-content-center">
      <div className=" w-[27.5rem] lg:text-center sm3:w-[unset] ">
        <h1 className=' text-[3.5rem] li:text-[2.5rem] font-[650] leading-[3.5rem] li:leading-[2.5rem] text-[#4c224a]'>
          10,000+ of our users love our products.</h1>
        <p className=" text-[18px] li:text-[16px] font-[600] text-[#8d7d8a] mt-[1rem]">
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
        </p>
      </div>
      <div className=" lg:mt-[2rem] li:mt-[0.5rem] ">
        {/* rendering the ratings component with different properties passed down to the child component */}
        <Ratings review={firstReview} fiveStars={fiveStars} ml="0"/>
        <Ratings review={secondReview} fiveStars={fiveStars} ml="2"/>
        <Ratings review={thirdReview} fiveStars={fiveStars} ml="3"/>
      </div>
    </div>
  )
}

export default FirstSection