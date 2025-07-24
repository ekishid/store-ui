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
  return (
    <React.Fragment>
      <div className="h-screen w-screen flex flex-col">
        <Header showLogin={() => setShowLogin(true)} showSidebar={() => setShowSidebar(true)} />
        <Outlet />
        <Modal isOpen={showLogin} close={() => setShowLogin(false)}/>
        <Sidebar close={() => setShowSidebar(false)} isOpen={showSidebar} className="p-4 bg-neutral-200 border-neutral-300 shadow-lg">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faXmark} onClick={() => setShowSidebar(false)} className="cursor-pointer text-xl" />
          </div>
        </Sidebar>
        <Footer/>
      </div>
    </React.Fragment>
  )
}
