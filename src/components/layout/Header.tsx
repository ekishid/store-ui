import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping, faLayerGroup, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import {useDetectScroll} from '../../hooks/useDetectScroll.tsx'
import {useState} from 'react'
import {Link} from '@tanstack/react-router';
import Sidebar from '../Sidebar.tsx';

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
  const [showCart, setShowCart] = useState<boolean>(false)
  return (
    <>
      <header className={`z-40 w-full ${hasDetectedScroll ? 'h-[32px] fixed top-0 backdrop-blur-xs backdrop-saturate-150 shadow-neutral-300 shadow-lg border border-neutral-50 bg-white/30' : ''} min-h-[64px] px-6 flex flex-row items-center justify-between transition-all ease-in-out duration-300`}>
        <div className="flex flex-row items-center gap-3">
          <FontAwesomeIcon icon={faBars} className="cursor-pointer hover:scale-115 ease-in-out duration-300 transition-all" onClick={() => showSidebar()} />
          <div>Logo</div>
        </div>
        <ul className="hidden flex-row gap-4 sm:flex">
          <li className="cursor-pointer gap-1 flex items-center group" onClick={() => setShowSearching((prevState) => !prevState)}>
            <FontAwesomeIcon icon={faSearch} className="group-hover:animate-wiggle group-hover:scale-120 duration-300 ease-in-out transition-all" aria-label="Categories icon" />
            Search
          </li>
          {searching && (
            <input type="text" placeholder="search" autoFocus/>
          )}
          <li className="cursor-pointer">
            <Link to="/categories" className="flex items-center gap-1 group" aria-label="Categories link">
              <FontAwesomeIcon icon={faLayerGroup} className="group-hover:animate-wiggle group-hover:scale-120 duration-300 ease-in-out transition-all" aria-label="Categories icon" />
              Categories
            </Link>
          </li>
          <li className="cursor-pointer flex items-center gap-1 group" popoverTarget="cart" aria-label="Cart link" onClick={() => setShowCart(true)}>
            <FontAwesomeIcon icon={faCartShopping} className="group-hover:scale-120 duration-300 ease-in-out transition-all group-hover:animate-wiggle" />
            Cart
          </li>
          <li className="cursor-pointer group flex items-center gap-1" onClick={() => showLogin()}>
            <FontAwesomeIcon icon={faUser} className="group-hover:scale-120 duration-300 ease-in-out transition-all group-hover:animate-wiggle" />
            Log in
          </li>
        </ul>
        <Sidebar direction="ttb" isOpen={showCart} close={() => setShowCart(false)} className={`max-md:h-full z-50 bg-neutral-200 border-neutral-300 md:rounded-b-4xl ${showCart ? 'drop-shadow-2xl' : ''}`}>
          <div className="px-3 pb-3 w-full h-full flex flex-col gap-4">
            <div className="w-full h-full rounded-b-3xl p-3">
              <button className="max-md:w-full bg-indigo-900 text-white border-0 hover:scale-[102%] duration-300 ease-in-out transition-all gap-2 flex items-center justify-center">Pay now</button>
            </div>
          </div>
        </Sidebar>
      </header>
      <div ref={headerRef} />
    </>
  )
}

export default Header