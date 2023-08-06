import Profiles from './Profiles'

// importing profile images
import anne from "../images/image-anne.jpg"
import colton from "../images/image-colton.jpg"
import irene from "../images/image-irene.jpg"

const SecondSection = () => {
  // storing buyer's reviews in a variable to be passed as props to the child component
    const coltonCom =`"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`;

    const ireneCom =`"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`;

    const anneCom = `"Put an order with this company and can only praise them for the very high
      standard. Will definitely use them again and recommend them to everyone!"`;


  return (
    <div className=' flex justify-between gap-[2.5rem] lg:gap-[1.5rem] xxl:justify-center mt-[3rem] lg:mt[1rem] xxl:flex-wrap '>
      {/* rendering the profiles component with different properties passed down to the child component */}
        <Profiles img={colton} name="Colton Smith" status="Verified Buyer" comment={coltonCom} mt="0" />
        <Profiles img={irene} name="Irene Roberts" status="Verified Buyer" comment={ireneCom} mt="2" />
        <Profiles img={anne} name="Anne Wallace" status="Verified Buyer" comment={anneCom} mt="3" />
    </div>
  )
}

export default SecondSection