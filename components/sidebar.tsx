"use client"

import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarLogo from './sidebar-logo';
import SidebarItem from './sidebar-item';
import SidebarTweetButton from './sidebar-tweet-button';



const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href:'/notifications',
            icon: BsBellFill
        }, 
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }

    ];

    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-cend'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                    <SidebarItem onClick={()=>{}} label="Logout" icon={BiLogOut} />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;