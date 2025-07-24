import {useClickOutside} from '../hooks/useClickOutside.tsx';
import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt'
interface SidebarProps {
  isOpen: boolean
  close: () => void
  direction?: Direction
  children?: ReactNode
  className?: string
}
const Sidebar = ({ isOpen, close, direction = 'ltr', children, className = '' }: SidebarProps) => {
  const sidebarRef = useClickOutside<HTMLDivElement>(() => {
    close()
  })

  const directionClass = () => {
    if (direction === 'ltr') {
      return isOpen ? 'left-0 h-full' : '-translate-x-[350px] h-full'
    } else if (direction === 'rtl') {
      return isOpen ? 'right-0 h-full' : 'right-0 translate-x-[350px] h-full'
    } else if (direction === 'ttb') {
      return isOpen ? 'top-0 left-0 w-full h-[300px]' : 'top-0 left-0 -translate-y-[300px] w-full h-[300px]'
    } else if (direction === 'btt') {
      return isOpen ? 'bottom-0 left-0 w-full h-[300px]' : 'bottom-0 left-0 translate-y-[300px] w-full h-[300px]'
    }
  }
  return (
    <div ref={sidebarRef} className={twMerge(`z-50 bg-white w-[350px] fixed border-neutral-100 border shadow-lg transition-all ease-in-out duration-700 ${directionClass()} ${className}`)}>
      {children}
    </div>
  )
}

export default Sidebar