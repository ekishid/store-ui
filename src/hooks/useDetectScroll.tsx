import {useEffect, useState, useRef, type RefObject} from 'react'

interface useDetectScrollProps {
  threshold?: number
  rootMargin?: string
}

export const useDetectScroll = <T extends HTMLElement>({
  threshold = 0,
  rootMargin = '0px',
}: useDetectScrollProps): [boolean, RefObject<T | null>] => {
  const [hasDetectedScroll, setHasDetectedScroll] = useState(false)
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasDetectedScroll(!entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [hasDetectedScroll, elementRef]
}