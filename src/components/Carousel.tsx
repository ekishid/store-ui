import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {type ReactNode, useEffect, useRef, useState} from 'react'

type CarouselConfig = {
  cardWidth?: number
  gap?: number
}
interface CarouselProps {
  className?: string
  children: ReactNode
  config?: CarouselConfig
}
const Carousel = ({
  children,
  className,
  config = {
    cardWidth: 350,
    gap: 20,
  },
}: CarouselProps) => {
  const scrollAmount = config!.cardWidth! + config!.gap!
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
    <div className={`relative ${className}`}>
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
        {children}
      </div>
    </div>
  )
}

export default Carousel