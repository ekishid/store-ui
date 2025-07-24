import {useState} from 'react'
import SVG from './assets/react.svg'

import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import {useDetectScroll} from './hooks/useDetectScroll.tsx'
import Hero from './components/Hero.tsx'
import TrendingProducts from './components/TrendingProducts.tsx'
import Categories from './components/Categories.tsx'
import Modal from './components/Modal.tsx'
import Sidebar from './components/Sidebar.tsx'

function App() {

  const [hasDetectedScroll, headerRef] = useDetectScroll<HTMLDivElement>({})
  const [searching, setShowSearching] = useState<boolean>(false)
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className={`z-40 w-full ${hasDetectedScroll ? 'h-[32px] fixed top-0 backdrop-blur-xs backdrop-saturate-150 shadow-neutral-300 shadow-lg border border-neutral-50 bg-white/30' : ''} min-h-[64px] px-6 flex flex-row items-center justify-between transition-all ease-in-out duration-300`}>
        <div className="flex flex-row items-center gap-3">
          <FontAwesomeIcon icon={faBars} className="cursor-pointer hover:scale-115 ease-in-out duration-300 transition-all" onClick={() => setShowSidebar(true)} />
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
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer flex items-center gap-2 group">
            <FontAwesomeIcon icon={faCartShopping} className="group-hover:scale-105 group-hover:animate-wiggle" />
            Cart
          </li>
          <li className="cursor-pointer" onClick={() => setShowLogin(true)}>Log in</li>
        </ul>
      </header>
      <Modal isOpen={showLogin} close={() => setShowLogin(false)}/>
      <Sidebar close={() => setShowSidebar(false)} isOpen={showSidebar}/>

      <main className="flex flex-col gap-16">
        <div ref={headerRef} />
        <Hero/>
        <Hero variant="secondary"/>
        <TrendingProducts/>
        <Categories
          categories={[
            {
              id: 1,
              name: 'Electronics',
              content: (
                <>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                  <div className="h-full flex flex-col cursor-pointer hover:scale-110 hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                    <img className="object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                    <p className="text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                  </div>
                </>
              )
            },
            {
              id: 2,
              name: 'Foods',
              content: (
                <>
                  Content
                </>
              )
            },
            {id: 3, name: 'Books', content: <div>Content Category #3</div>},
          ]}
        />
      </main>
      <footer className="min-h-[400px] w-full bg-indigo-900 mt-20">Footer</footer>
    </div>
  )
}

export default App
