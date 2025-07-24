import { createFileRoute } from '@tanstack/react-router'
import SVG from '../assets/react.svg'

import '../App.css'
import Hero from '../components/Hero.tsx'
import TrendingProducts from '../components/TrendingProducts.tsx'
import Categories from '../components/Categories.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex flex-col gap-16 max-w-screen">
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
                {Array.from({ length: 6 }).map((_, index) => {
                  return (
                    <div key={`category-product-${index}`} className="h-full md:h-[300px] flex flex-col cursor-pointer hover:scale-[103%] hover:drop-shadow-lg bg-transparent transition-all ease-in-out duration-300">
                      <img className="h-[80%] object-cover aspect-16/9 rounded-lg border border-neutral-100" src={SVG} alt=""/>
                      <p className="h-[20%] text-center text-sm font-semibold mt-1 mb-2">Product #1</p>
                    </div>
                  )
                })}
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
  )
}
