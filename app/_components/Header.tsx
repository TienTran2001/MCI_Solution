'use client'

import Image from 'next/image';
import logo from '/public/images/logo.png';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const nav = [
  {
    name: 'Giới thiệu',
    link: '/'
  },
  {
    name: 'Giải pháp',
    link: '/',
    type: 'parent',
    children: [
      { name: 'Chuyển đổi số doanh nghiệp', link: '' },
      { name: 'Thiết kế ứng dụng di động', link: '' },
      { name: 'Trường học số, trung tâm số', link: '' },
      { name: 'Phân tích sử lý dữ liệu lớn', link: '' },
      { name: 'Trí tuệ nhân tạo AI, máy học', link: '' },
      { name: 'Kết nối API bên thứ 3', link: '' },
    ]
  },
  {
    name: 'Bài viết',
    link: '/  ',
  },
  {
    name: 'Videos',
    link: '/'
  },
  {
    name: 'Tuyển dụng',
    link: '/'
  },
  {
    name: 'Đăng nhập',
    link: '/'
  },
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpen = (itemName: string) => {
    console.log('vào nè')
    // if (openMenu != null)
    setOpenMenu(openMenu === itemName ? null : itemName);

  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const closestLi = (event.target as HTMLElement).closest('li');
      if (!closestLi) {
        setOpenMenu(null);
      }

    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-light py-2 pr-4 shadow-custom flex items-center justify-between h-20" >
      {/* logo */}
      <div className="w-[300px]">
        <a href="/">
          <Image className="px-5 w-full h-full object-cover" src={logo} alt="logo" />
        </a>
      </div>
      {/* nav */}
      <nav className='h-full flex items-center'>
        <ul className='flex items-center h-full text-gray-600'>
          {nav.length > 0 &&
            nav.map((item) =>
              <li key={item.name} className='nav-item list-item relative h-full'
                onClick={item?.type === 'parent' ? () => handleOpen(item.name) : undefined}
              >
                <Link className={clsx(' leading-6 font-semibold hover:font-bold relative p-2 flex items-center gap-x-1',
                  item?.type ? 'dropdown-toggle' : "nav-link"
                )} href={item.link}>
                  {item.name}
                </Link>
                {item?.type === 'parent' && openMenu === item.name &&
                  <ul
                    className='absolute top-[65px] left-0 min-w-[250px] w-auto whitespace-nowrap bg-white shadow-custom rounded-md pt-2 pb-3 ' >
                    {
                      item?.children?.length > 0 && item.children.map(item =>
                        <li key={item.name} className=' hover:bg-gray-100'>
                          <Link href={item.link} className='py-1 px-4 inline-block w-full h-full' >
                            {item.name}
                          </Link>
                        </li>)
                    }
                    <li className=' hover:bg-gray-100'>
                      <Link href='' className='py-1 px-4 font-bold inline-block w-full h-full' >Tất cả</Link>
                    </li>
                  </ul>
                }
              </li>)
          }
        </ul>
        <button className='rounded-[30px] bg-linear text-white font-bold h-[50px] px-4 flex items-center gap-x-2'>
          <FaPhoneAlt />
          <span>
            093.414.6016
          </span>
        </button>
      </nav>
    </header >
  )
}

export default Header
