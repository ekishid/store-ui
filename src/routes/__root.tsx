import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/layout/Header.tsx'
import {useState} from 'react'
import Modal from '../components/Modal.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Footer from '../components/layout/Footer.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  return (
    <React.Fragment>
      <div className="h-screen w-screen flex flex-col">
        <Header isCartOpen={showCart} showCart={() => setShowCart(true)} showLogin={() => setShowLogin(true)} showSidebar={() => setShowSidebar(true)} />
        <Outlet />
        <Modal isOpen={showLogin} close={() => setShowLogin(false)}/>
        <Sidebar close={() => setShowSidebar(false)} isOpen={showSidebar} className="p-4 bg-neutral-200 border-neutral-300 shadow-lg">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faXmark} onClick={() => setShowSidebar(false)} className="cursor-pointer text-xl" />
          </div>
        </Sidebar>
        <Sidebar slideFromHeader direction="ttb" isOpen={showCart} close={() => setShowCart(false)} className={`max-md:h-full z-20 backdrop-blur-xs backdrop-saturate-150 border-neutral-300 md:rounded-b-4xl ${showCart ? 'drop-shadow-2xl' : ''}`}>
          <div className="px-3 pb-3 w-full h-full flex flex-col gap-4">
            <div className="w-full h-full rounded-b-3xl p-3">
              <button className="max-md:w-full bg-indigo-900 text-white border-0 hover:scale-[102%] duration-300 ease-in-out transition-all gap-2 flex items-center justify-center">Pay now</button>
            </div>
          </div>
        </Sidebar>
        <Footer/>
      </div>
    </React.Fragment>
  )
}
