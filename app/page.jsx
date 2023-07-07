import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
    <h1 className= "head_text text-center">
        Post & Share 
        <br className = "max-md:hidden" />
        <span className = "blue_gradient text-center"> Sports Buzz, Transfer Rumours and Bold Hot takes!</span>
          
       
    </h1>
    <p className= "desc text-center">
        sportspheree is an open-source platform for sports fans to discover and share all the latest news, rumours and opinions in the sports world.
    </p>

    <Feed /> 
    </section>
    
  )
}

export default Home