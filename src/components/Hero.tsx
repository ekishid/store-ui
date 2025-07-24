import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faEye} from '@fortawesome/free-solid-svg-icons'
import SVG from '../assets/react.svg'
import {useNavigate} from '@tanstack/react-router';

type Variant = 'primary' | 'secondary'
interface HeroProps {
  variant?: Variant
}
interface TextProps {
  variant: Variant
}

const Image = () => {
  return (
    <img alt="" src={SVG} className="sm:self-center self-end object-cover bg-neutral-200 rounded-2xl w-full aspect-16/9 flex items-center justify-center" />
  )
}
const Text = ({ variant }: TextProps) => {
  const navigate = useNavigate()
  return (
    <div className={`flex flex-col gap-8 md:justify-center ${variant === 'primary' ? 'justify-start' : 'justify-end'}`}>
      <div>
        <h3 className="text-xl font-bold">Dell XPS 13"</h3>
        <p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row min-md:flex-col min-lg:flex-row gap-2 w-full">
          <button className="w-fit max-lg:w-full group self-start bg-indigo-600 text-white border-0 hover:scale-[102%] duration-300 ease-in-out transition-all gap-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faCartPlus} className="group-hover:scale-105 group-hover:animate-wiggle" />
            Add to cart
          </button>
          <button onClick={() => navigate({ to: '/product' })} className="w-fit max-lg:w-full self-start bg-zinc-400 text-white border-0 hover:scale-[102%] duration-300 ease-in-out transition-all gap-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} />
            Go to product
          </button>
        </div>
        <span className="max-md:self-end md:justify-end text-2xl font-bold pl-4">$3.99</span>
      </div>
    </div>
  )
}
const Hero = ({
  variant = 'primary',
}: HeroProps) => {
  return (
    <div className="md:min-h-[300px] px-12">
      <div className="grid md:grid-cols-2 max-md:grid-rows-[300px,_minmax(400px,_1fr)] md:gap-12 gap-4 h-full">
        {variant === 'primary' ? (
          <>
            <Image/>
            <Text variant={variant}/>
          </>
        ) : (
          <>
            <Text variant={variant} />
            <Image/>
          </>
        )}
      </div>
    </div>
  )
}

export default Hero