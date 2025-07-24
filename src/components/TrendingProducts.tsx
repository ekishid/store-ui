import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faEye} from '@fortawesome/free-solid-svg-icons'
import SVG from '../assets/react.svg'
import {Link} from '@tanstack/react-router';
import Carousel from './Carousel.tsx';

const Card = () => {
  return (
    <Link to="/product" className="relative group/card z-10 hover:scale-[102%] transition-all ease-in-out duration-200 gap-3 bg-neutral-100 min-w-[350px] max-w-[350px] h-[370px] rounded-2xl p-2 shadow-lg cursor-pointer">
      <div className="bg-white hidden absolute top-5 right-5 p-2 rounded-lg group-hover/card:flex">
        <FontAwesomeIcon icon={faEye} />
      </div>
      <img src={SVG} className="w-full object-cover rounded-lg bg-neutral-200 h-1/2 flex justify-center items-center text-2xl font-bold" alt=""/>
      <div className="mt-3 flex flex-col justify-center gap-3">
        <div>
          <h3 className="text-xl font-bold">Dell XPS 13"</h3>
          <p className="text-sm font-light line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button className="group/cta bg-indigo-600 text-white border-0 hover:scale-[102%] duration-300 ease-in-out transition-all gap-2 flex items-center justify-center w-full">
          <FontAwesomeIcon icon={faCartPlus} className="group-hover:scale-105 group-hover/cta:animate-wiggle" />
          Add to cart
        </button>
      </div>
    </Link>
  )
}
const TrendingProducts = () => {
  return (
    <Carousel className="min-h-[400px]" config={{ cardWidth: 350, gap: 20 }}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Carousel>
  )
}

export default TrendingProducts