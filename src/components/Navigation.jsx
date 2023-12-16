import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import MainLogo from '../assets/images/logo.svg';

export default function Navigation() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center mx-4 mt-8 lg:mx-36 lg:mt-16 '>
            <Logo />
            <div className='lg:hidden'>
                <Hamburger
                    toggled={isOpen}
                    toggle={() => setOpen(!isOpen)} // Toggle the state on click
                    size={38}
                    color="hsl(240, 100%, 5%)"
                    distance="sm"
                />
                {isOpen && <NavigationList />}
                
            </div>
            <div className='hidden lg:inline-block'> 
                <NavigationListDesktop />
            </div>
        </div>
    );
}

const Logo = () => <img src={MainLogo} alt='Logo image' width='40' className='lg:w-16' />;

const NavigationList = () => (
    
        <ul className=' list-none absolute bg-white h-full translate-y-[1.7em] -translate-x-[12em] py-[12em] px-[8em] shadow-2xl shadow-very-dark-blue '>
            <div className='flex flex-col -ml-[5em] gap-7 text-lg'>
            <li className='hover:text-red cursor-pointer transition-colors'>Home</li>
            <li className='hover:text-red cursor-pointer transition-colors'>New</li>
            <li className='hover:text-red cursor-pointer transition-colors'>Popular</li>
            <li className='hover:text-red cursor-pointer transition-colors'>Trending</li>
            <li className='hover:text-red cursor-pointer transition-colors'>Categories</li>
            </div>
        </ul>
   
);
const NavigationListDesktop = () => {
   return (
    <ul className='flex gap-10 text-sm '>
    
    <li className='hover:text-red cursor-pointer transition-colors'>Home</li>
    <li className='hover:text-red cursor-pointer transition-colors'>New</li>
    <li className='hover:text-red cursor-pointer transition-colors'>Popular</li>
    <li className='hover:text-red cursor-pointer transition-colors'>Trending</li>
    <li className='hover:text-red cursor-pointer transition-colors'>Categories</li>
   
</ul>
   )
}
