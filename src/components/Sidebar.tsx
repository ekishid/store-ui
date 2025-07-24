import {useClickOutside} from '../hooks/useClickOutside.tsx';

interface SidebarProps {
  isOpen: boolean
  close: () => void;
}
const Sidebar = ({ isOpen, close }: SidebarProps) => {
  const sidebarRef = useClickOutside<HTMLDivElement>(() => {
    close()
  })
  return (
    <div ref={sidebarRef} className={`z-50 bg-white w-[350px] h-full fixed border-neutral-100 border shadow-lg transition-all ease-in-out duration-700 ${isOpen ? 'translate-x-0' : '-translate-x-[350px]'}`}>
      Sidebar
    </div>
  )
}

export default Sidebar