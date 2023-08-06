

import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col space-y-10">
      <Image
    src='/assets/images/logo.svg'
    alt='logo'
    width={300}
    height={300}
    className='object-contain'
  />
      <h1 className="head_text text-center mb-33  font-medium">
        Welcome to Sportspheree!   
        <br className="max-md:hidden" />
        <span className=" text-center text-white  mt-8 font-medium "> 
          Sports Buzz, Rumours and Bold Hot takes!</span>
      </h1>
      
      <p className="text-center text-white text-2xl font-inter mt-8 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-3xl shadow hero__subtitle ">
  Welcome to Sportspheree - where the sports world converges! Get the latest updates, engage in passionate discussions, and connect with fellow sports enthusiasts. Your ultimate destination for all things sports!
  
  Post & Share today!
</p>



      
    </section>
  )
}

export default Home
