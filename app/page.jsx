import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
    <h1 className= "head_text text-center">
        Welcome to Sportspheree! 
        <br className = "max-md:hidden" />
        <span className = "blue_gradient text-center"> Sports Buzz,Rumours and Bold Hot takes!</span>
          
       
    </h1>
    <p className= "desc text-center">
        Post & Share today!
        Below are some of our current posts!
    </p>

    <Feed /> 
    </section>
    
  )
}

export default Home