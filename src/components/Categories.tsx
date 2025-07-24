import {type ReactNode, useState} from 'react';

type Category = {
  id: number;
  name: string;
  content: ReactNode;
}
interface CategoriesProps {
  categories: Category[];
}
const Categories = ({ categories }: CategoriesProps) => {
  const [activeTab, setActiveTab] = useState(categories[0].id ?? 1);
  return (
    <div className="min-h-[400px] px-12">
      <div className="h-full max-lg:grid-rows-[100px_minmax(900px,_1fr)] lg:grid-rows-[minmax(900px,_1fr)] xl:grid-rows-[minmax(600px,_1fr)] lg:grid-cols-[300px_minmax(300px,_1fr)] grid gap-8">
        <div className="flex max-lg:flex-row lg:flex-col gap-2 justify-center max-lg:items-center">
          {categories.map(category => (
            <button className="bg-indigo-600/80 text-white" key={category.id} onClick={() => setActiveTab(category.id)}>{category.name}</button>
          ))}
        </div>
        <div className="relative overflow-hidden bg-white rounded-xl shadow-lg gap-3">
          {categories.map(category => (
            <div
              key={category.id}
              className={`grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 absolute inset-0 p-6 transition-all duration-700 ease-in-out ${activeTab === category.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
            >
              {category.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories