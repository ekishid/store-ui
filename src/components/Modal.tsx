import {faSignIn, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useClickOutside} from '../hooks/useClickOutside.tsx';
import {useEffect} from 'react';

interface ModalProps {
  close: () => void;
  isOpen: boolean;
}
const Modal = ({ close, isOpen }: ModalProps) => {
  const loginRef = useClickOutside<HTMLDivElement>(() => {
    close()
  })

  // Hide scrollbar when login modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className={`fixed h-screen w-screen backdrop-blur-xs z-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div ref={loginRef} className="bg-white p-3 rounded-lg h-[400px] w-[300px] top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between">
        <div className="flex justify-end mb-8">
          <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-xl" onClick={() => close()} />
        </div>
        <h3 className="text-xl font-bold text-center">Log in</h3>
        <p className="text-center text-sm text-neutral-400">Welcome to Store UI</p>
        <form action="" className="flex flex-col gap-3">
          <input type="text" className="border shadow-md border-neutral-400/50 rounded-md w-full px-4 py-3 text-center" />
          <input type="text" className="border shadow-md border-neutral-400/50 rounded-md w-full px-4 py-3 text-center" />
          <button className="bg-indigo-500 text-white gap-2 flex items-center justify-center mt-12">
            <FontAwesomeIcon icon={faSignIn} />
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal