import Image from "next/image"
import logo from '/public/images/logo.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { rolesFooter } from "../utils/constants";


const Footer = () => {
  return (
    <div className="py-10 bg-[#ecf0f1] border border-[#bdc3c7] ">
      <div className="max-w-container w-full mx-auto grid grid-cols-12">
        <div className="col-span-4 flex flex-col px-3 items-center gap-y-2">
          {/* logo */}
          <div className="w-[375px]">
            <a href="/">
              <Image className="px-5 w-full h-full object-cover" src={logo} alt="logo" />
            </a>
          </div>
          <h2 className='text-base font-bold text-red-light text-center'>
            Công ty cổ phần Giải Pháp doanh nghiệp MCI Solutions
          </h2>
          <div className='text-center flex'>
            <FaLocationDot size={15} className='text-gray-400 -mr-2' />
            <p className=" text-[13px] text-gray-400">
              Tầng 5 tòa Starcity, Số 23 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân, Thành Phố Hà Nội
            </p>

          </div>
        </div>
        <div className='col-span-4 flex flex-col gap-y-4 px-3'>
          <p className='font-bold text-red-light'>Hỗ trợ khách hàng</p>
          <p className='text-[13px] font-bold text-black-light'>Hotline Sale Saletech & Martech</p>
          <div className="text-gray-400 text-[13px]">
            <p className="text-[13px]">CEO: 093.414.6016</p>
            <p className="text-[13px]" >CTO: 098.252.1378</p>
          </div>
          <p className='text-[13px] font-bold text-black-light'>Email sale</p>
          <p className='text-[13px] text-gray-400'>sonnc@mcisolutions.com.vn</p>
          <p className='text-[13px] font-bold text-black-light'>Kết nối với chúng tôi</p>
          <div className="flex gap-x-1">
            <div className="p-2 rounded-full bg-[#3b5998]">
              <FaFacebook size={25} className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-black">
              <FaEnvelope size={25} className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#41a248] ">
              <FaPhoneAlt size={25} className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-[#c4302b]">
              <FaYoutube size={25} className="text-white" />
            </div>
          </div>
        </div>
        <div className='col-span-4 flex flex-col gap-y-4 px-3'>
          <p className="text-red-light font-bold">
            Chính sách và quy định chung
          </p>
          <ul className="ml-5">
            {
              rolesFooter.length > 0 && rolesFooter.map((item, index) => <li key={index} className=" text-gray-400">
                <Link href={item.link} className="text-[13px] hover:text-red-light">
                  {item.name}
                </Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
