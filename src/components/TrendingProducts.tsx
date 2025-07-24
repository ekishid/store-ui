import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faChevronLeft, faChevronRight, faEye} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useRef, useState} from 'react'
import SVG from '../assets/react.svg'

const Card = () => {
  return (
    <div className="relative group/card z-10 hover:scale-[102%] transition-all ease-in-out duration-200 gap-3 bg-neutral-100 min-w-[350px] max-w-[350px] h-[370px] rounded-2xl p-2 shadow-lg cursor-pointer">
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
    </div>
  )
}
const TrendingProducts = () => {
  const cardWidth = 350
  const gap = 20
  const scrollAmount = cardWidth + gap
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    handleScroll()
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }


  return (
    <div className="min-h-[400px] relative">
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="z-20 absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Scroll left"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="z-20 absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Scroll right"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
        </button>
      )}

      <div className="h-full items-center flex flex-row gap-5 w-full overflow-auto my-8 px-8" ref={scrollContainerRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default TrendingProducts