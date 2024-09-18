import './App.css'
import Accordian from './components/accordian/Accordian'
import ImageSlider from './components/image slider/ImageSlider'
import Loading from './components/Load More/Loading'
import RandColorGenerate from './components/Random Color Generator/RandColorGenerate'
import StarRating from './components/Rating/StarRating'
import Recursion from './components/recursive comps/Recursion'
import menuList from './components/recursive comps/menuList'
function App() {

  return (
    <>
    {/* <Accordian/> */}
    {/* <RandColorGenerate/> */}
    {/* <StarRating/> */}
    {/* <ImageSlider url = "https://picsum.photos/v2/list?limit=10"/> */}
    {/* <Loading/> */}
    <Recursion menuList = {menuList}/>
    </>
  )
}

export default App
