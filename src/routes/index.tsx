import { createFileRoute } from '@tanstack/react-router'
import {useState} from 'react'
import SVG from '../assets/react.svg'

import '../App.css'
import Modal from '../components/Modal.tsx';
import Sidebar from '../components/Sidebar.tsx';
import Hero from '../components/Hero.tsx';
import TrendingProducts from '../components/TrendingProducts.tsx';
import Categories from '../components/Categories.tsx';
import Header from '../components/layout/Header.tsx';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header showLogin={() => setShowLogin(true)} showSidebar={() => setShowSidebar(true)} />
      <Modal isOpen={showLogin} close={() => setShowLogin(false)}/>
      <Sidebar close={() => setShowSidebar(false)} isOpen={showSidebar}/>

      <main className="flex flex-col gap-16">
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
