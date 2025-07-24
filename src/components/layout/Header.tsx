import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import {useDetectScroll} from '../../hooks/useDetectScroll.tsx'
import {useState} from 'react'
import {Link} from '@tanstack/react-router';

interface HeaderProps {
  showLogin: () => void
  showSidebar: () => void
}
const Header = ({
  showLogin,
  showSidebar,
}: HeaderProps) => {
  const [hasDetectedScroll, headerRef] = useDetectScroll<HTMLDivElement>({})
  const [searching, setShowSearching] = useState<boolean>(false)
  return (
    <>
      <header className={`z-40 w-full ${hasDetectedScroll ? 'h-[32px] fixed top-0 backdrop-blur-xs backdrop-saturate-150 shadow-neutral-300 shadow-lg border border-neutral-50 bg-white/30' : ''} min-h-[64px] px-6 flex flex-row items-center justify-between transition-all ease-in-out duration-300`}>
        <div className="flex flex-row items-center gap-3">
          <FontAwesomeIcon icon={faBars} className="cursor-pointer hover:scale-115 ease-in-out duration-300 transition-all" onClick={() => showSidebar()} />
          <div>Logo</div>
        </div>
        <ul className="hidden flex-row gap-3 sm:flex">
          <li className="cursor-pointer gap-2 flex items-center" onClick={() => setShowSearching((prevState) => !prevState)}>
            <FontAwesomeIcon icon={faSearch} />
            Search
          </li>
          {searching && (
            <input type="text" placeholder="search" autoFocus/>
          )}
          <li className="cursor-pointer"><Link to="/categories">Categories</Link></li>
          <li className="cursor-pointer flex items-center gap-2 group">
            <FontAwesomeIcon icon={faCartShopping} className="group-hover:scale-105 group-hover:animate-wiggle" />
            Cart
          </li>
          <li className="cursor-pointer" onClick={() => showLogin()}>Log in</li>
        </ul>
      </header>
      <div ref={headerRef} />
    </>
  )
}

export default Header