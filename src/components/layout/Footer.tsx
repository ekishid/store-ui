import {Link} from '@tanstack/react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'

interface FooterLinkProps {
  link: string;
  text: string;
}

const FooterLink = ({ link, text }: FooterLinkProps) => {
  return (
    <li className="text-sm text-neutral-400 hover:text-white transition-all ease-in-out duration-300">
      <Link to={link}>{text}</Link>
    </li>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-900 mt-20">
      <div className="grid grid-cols-1 grid-rows-[200px,_minmax(200px,_1fr)] md:grid-rows-1 md:grid-cols-2 gap-10 py-10 px-12">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-white" aria-label="About">About Store UI</h3>
          <p className="text-sm text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-[200px,_minmax(200px,_1fr)] md:grid-rows-2 sm:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-white gap-2 flex items-center" aria-label="Quick Links">
              <FontAwesomeIcon icon={faLink} />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <FooterLink link="/" text="Home" />
              <FooterLink link="/" text="Categories" />
              <FooterLink link="/" text="Account" />
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-white gap-2 flex items-center" aria-label="Quick Links">
              <FontAwesomeIcon icon={faLink} />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <FooterLink link="/" text="Home" />
              <FooterLink link="/" text="Categories" />
              <FooterLink link="/" text="Account" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer