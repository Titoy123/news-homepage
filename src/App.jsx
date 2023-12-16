import Navigation from "./components/Navigation"
import Main from "./components/Main"
export default function App() {
  return (
    <div className="relative">
      <Navigation/>
      <Main/>
      <Attribution/>
    </div>
  )
}

const Attribution = () => {
  return (
 
   <p className="text-center text-very-dark-blue text-xs">
   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="mr-3 font-bold text-red hover:text-orange" >Frontend Mentor</a>
    Coded by <a href="https://github.com/" className="text-red font-bold hover:text-orange">Troy Jose B.Hipona</a>
   </p>

  )
}
