import './App.css'
import Accordian from './components/accordian/Accordian'
import ImageSlider from './components/image slider/ImageSlider'
import Loading from './components/Load More/Loading'
import RandColorGenerate from './components/Random Color Generator/RandColorGenerate'
import StarRating from './components/Rating/StarRating'
import Recursion from './components/recursive comps/Recursion'
import menuList from './components/recursive comps/menuList'
import QrCodeScanner from './components/QR code scanner/QrCodeScanner'
import ThemeChanger from './components/theme-changer/ThemeChanger'
function App() {

  return (
    <>
    {/* <Accordian/> */}
    {/* <RandColorGenerate/> */}
    {/* <StarRating/> */}
    {/* <ImageSlider url = "https://picsum.photos/v2/list?limit=10"/> */}
    {/* <Loading/> */}
    {/* <Recursion menuList = {menuList}/> */}
    {/* <QrCodeScanner/> */}
    <ThemeChanger/>
    </>
  )
}

export default App
