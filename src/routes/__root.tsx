import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/layout/Header.tsx';
import {useState} from 'react';
import Modal from '../components/Modal.tsx';
import Sidebar from '../components/Sidebar.tsx';

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
        <Sidebar close={() => setShowSidebar(false)} isOpen={showSidebar}/>
        <footer className="min-h-[400px] w-full bg-indigo-900 mt-20">Footer</footer>
      </div>
    </React.Fragment>
  )
}
