import Image from "next/image";
import homeImg from '/public/images/home_img.png'
import about from '/public/images/about.png'
import advance from '/public/images/advance.png'
import trend from '/public/images/trend-img.png'
import avatar from '/public/images/avatar.jpg'
import { IoMicCircleSharp } from "react-icons/io5";
import { FaClock, FaEye, FaUserCircle } from "react-icons/fa";
import { aboutList, newsToday, strength } from "./utils/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Register digital conversion */}
      <section className="mt-20 bg-custom-image bg-center bg-cover py-[30px]">
        <div className=" max-w-container  w-full  mx-auto flex">
          <div className="w-1/2 px-3 flex flex-col gap-y-4">
            <h2 className="text-[35px] mt-[30px]  text-[#C41D29] font-bold">Dẫn đầu giải pháp chuyển đổi số về quản lý khách hàng & vận hành doanh nghiệp</h2>
            <p className="text-xl text-black-light ">
              Nền tảng quản lý toàn diện với các dashboard hỗ trợ khách hàng và cung ứng nhận sự chất lượng cao.
            </p>
            <div>
              <button className="py-[10px] px-5 m-[10px] rounded-full font-semibold bg-[#ff7f00]  text-white hover:text-black hover:bg-white transition-all">
                Đăng ký ngay!
              </button>
            </div>
          </div>
          <div className="w-1/2 px-3">
            <Image src={homeImg} alt="home_img" className='max-w-[572px] w-full object-cover' />
          </div>
        </div>
      </section>
      {/* solution */}
      <section className="mt-12 max-w-container w-full mx-auto grid grid-cols-12 gap-4">
        <div className='col-span-1'></div>
        <div className='col-span-10 flex flex-col gap-y-4'>
          <div className="text-xl font-bold text-center text-black-light tracking-wide">
            Với <span className="text-red-500 text-xl"> bộ giải pháp của MCI Solutions</span> sẽ giúp hoàn thiện hoạt động chuyển đổi số cho doanh nghiệp phát triển thành <span className="text-red-500 text-xl">
              doanh nghiệp số
            </span>, cho phép <span className="text-yellow-500 text-xl">tự động hoá quy trình</span> kinh doanh đa kênh để bứt phá doanh số
          </div>
          <div className="mb-4 text-center">
            Trong chuyển đổi số, quan trọng nhất là xây dựng được một thương hiệu mạnh và một chiến thuật kinh doanh hợp lý, giúp công ty của bạn tiếp cận số lượng khách hàng số lượng lớn và sinh lời mạnh mẽ, chúng tôi sẽ giúp bạn:
          </div>
        </div>
        <div className='col-span-1'></div>
      </section>
      {/* About Us */}
      <section className="max-w-container w-full flex mx-auto mt-12">
        <div className="w-1/2 px-3 flex flex-col gap-y-4">
          <div className="">
            <span className="py-[10px] px-[15px] rounded-full flex gap-x-1 items-center max-w-[150px] shadow-custom uppercase text-red-light" >
              <FaUserCircle size={25} />
              About us
            </span>
          </div>
          <h2 className="text-[#dc4b20] text-[50px] font-bold">
            MCI Solutions
          </h2>
          <p>
            MCI solutions đã và đang khẳng định vị thế trên thị trường nội địa và hướng tới thị trường khu vực, quốc tế thông qua những hoạt động kinh doanh chủ lực như:
          </p>
          <p className='font-semibold'>
            Giải pháp công nghệ phần mềm, Phân phối các sản phẩm SaaS, Giải pháp tích hợp phần cứng và Cung ứng nhân sự chất lượng
          </p>
          <div className="mt-5">
            <button className='rounded-[30px] bg-linear text-white font-bold h-[50px] px-[30px] py-[15px] flex items-center gap-x-2'>
              <span>
                Xem chi tiết
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 px-3">
          <Image src={about} alt="home_img" className='max-w-[442px] w-full object-cover' />
        </div>
      </section>
      {/* FIELDS */}
      <section className="mt-12 w-full bg-linear-light min-h-[300px]">
        <div className='max-w-container w-full mx-auto flex flex-col text-center gap-y-4 py-10 '>
          <div className="mx-auto">
            <span className="self-start py-[10px] px-[15px] bg-white rounded-full uppercase text-red-light flex items-center " >
              <IoMicCircleSharp size={30} />
              <span>
                Lĩnh vực, ngành nghề
              </span>
            </span>
          </div>
          <p className="text-white font-bold text-[30px]">Các ngành nghề sử dụng giải pháp của MCI Solution</p>
          <p className='max-w-[500px] text-white mx-auto'>
            Các giải pháp của MCI Solution phù hợp với nhiều lĩnh vực trong đời sống kinh tế – xã hội, trong đó phải kể đến:
          </p>
          <div className="grid grid-cols-10 gap-5">
            {
              aboutList.length > 0 && aboutList.map((item, index) => <div key={index} className="group col-span-2
                flex flex-col justify-center items-center gap-y-4 bg-white p-[30px] rounded-[30px] about-item  hover:text-white hover:border hover:border-white transition-all
              ">
                <div>
                  <Image src={`/images/solutions/${item.image}`} width={12} height={12} alt={item.name} className='w-[76px] object-cover group-hover:text-white' />
                </div>
                <span className='font-semibold group-hover:text-white '>
                  {item.name}

                </span>
              </div>)
            }
          </div>
        </div>
      </section>
      {/* strength */}
      <section className='max-w-container w-full mx-auto flex py-10'>
        <div className="w-1/2 px-3 flex flex-col gap-y-4">
          <span className="self-start py-[10px] px-[15px] rounded-full inline-flex gap-x-1 items-center shadow-custom uppercase text-red-light" >
            <FaUserCircle size={25} />
            ĐIỂM MẠNH CỦA MCI SOLUTIONS
          </span>
          <h2 className="text-[30px] text-red-light font-bold">MCI Solutions khác biệt và vượt trội</h2>
          <p className='text-base'>MCI Solution tự tin là một trong các công ty hàng đầu trong lĩnh vực giải pháp phầm mềm và tích hợp phần cứng, có năng lực cạnh tranh trên khu vực và thị trường quốc tế.
          </p>
          <div>
            <Image src={advance} alt="advance " className='w-full object-cover' />
          </div>
        </div>
        <div className="w-1/2 px-3 grid grid-cols-12 gap-4">
          {
            strength.length > 0 && strength.map((item, index) =>
              <div key={index}
                className="col-span-6 rounded-lg p-4 shadow-custom-100 flex flex-col gap-y-4 hover:-translate-y-2 hover:shadow-custom-200 transition-all"
              >
                <div className="text-red-light">
                  {item.icon}
                </div>
                <p className="text-red-light font-bold">{item.title}</p>
                <p className="">{item.desc}</p>
              </div>
            )
          }
        </div>
      </section>
      {/* NewsToday */}
      <section className="w-full py-10 max-w-container mx-auto flex flex-col gap-y-8">
        <div className="text-center">
          <span className="self-start py-[10px] px-[15px] rounded-full inline-flex gap-x-1 items-center shadow-custom uppercase text-red-light" >
            <FaUserCircle size={25} />
            Hôm nay có gì ?
          </span>
        </div>
        <h2 className='text-red-light text-[30px] font-bold text-center'>
          Chia sẻ kiến thức với chúng tôi
        </h2>
        <div className='grid grid-cols-12 gap-4'>
          {
            newsToday.length > 0 && newsToday.map((item, index) =>
              <div key={index} className="group news-today-item col-span-4 p-[15px] rounded-[15px] shadow-custom-100 flex flex-col gap-y-4 hover:shadow-custom-200 hover:-translate-y-2 transition-all">
                <div className='relative h-[210px]'>
                  <Image src={`/images/newstoday/${item.image}`} alt={item.title} fill
                    className='object-top object-cover rounded-t-xl' />
                </div>
                <h2 className="font-semibold text-[15px]">
                  {item.title}
                </h2>
                <div className="flex items-center gap-x-4">
                  <span className="text-[13px] text-gray-500 flex gap-x-1 items-center"><FaClock size={14} />
                    {item.public}</span>
                  <span className="text-[13px] text-gray-500 flex gap-x-1 items-center"><FaEye size={14} />
                    {item.views} lượt xem</span>
                </div>
                <p className="text-gray-500 text-[13px] truncate-2-lines">
                  {item.desc}
                </p>

                <button className="self-start px-[10px] py-[7px] border border-red-light rounded-full text-red-light font-semibold text-xs group-hover:text-white  ">Tìm hiểu thêm</button>
              </div>)
          }
        </div>
      </section>
      {/* connect */}
      <section className="mt-[100px] py-10  bg-connect-banner bg-no-repeat bg-center bg-cover">
        <div className="max-w-container w-full mx-auto  flex items-center ">
          <div className="w-1/2 flex flex-col gap-y-4">
            <h2 className="text-[35px] text-white font-bold">Doanh nghiệp của bạn đã sẵn sàng chuyển đổi tốt hơn?</h2>
            <p className='text-[15px] text-white'>Ứng dụng công nghệ tự động hàng đầu ngay bây giờ cùng chuyên gia của chúng tôi!</p>
            <div className="flex items-center justify-center">
              <div className="w-1/2">
                <button className="text-black-light rounded-full px-[20px] py-[10px] bg-white">
                  Chat với chuyên gia tư vấn
                </button>
              </div>
              <div className="w-1/2">
                <button className="text-white rounded-full px-[20px] py-[10px] bg-linear">
                  Gọi miễn phí qua internet
                </button>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>
      {/* trend */}
      <section className="max-w-container w-full flex py-10 mt-[50px] mx-auto" >
        <div className="w-1/2 px-3 flex flex-col gap-y-6">
          <span className="self-start py-[10px] px-[15px] bg-white rounded-full uppercase text-red-light inline-flex items-center shadow-custom " >
            <IoMicCircleSharp size={30} />
            <span>
              Xu thế tất yếu
            </span>
          </span>
          <h2 className="text-[30px] text-red-light font-bold">
            Đồng hành xu thế chuyển đổi số cho doanh nghiệp cả nước.
          </h2>
          <p className="" >Liên hệ ngay với chúng tôi qua số hotline <span className="text-red-light font-bold">093.414.6016</span> để được hướng dẫn.</p>
          <p>Chúng tôi trân trọng và rất hân hạnh được phục vụ!</p>
          <div className="flex items-center">
            <Image src={avatar} alt="avatar" className='avatar' />
            <Image src={avatar} alt="avatar" className='avatar' />
            <Image src={avatar} alt="avatar" className='avatar' />
            <Image src={avatar} alt="avatar" className='avatar' />

          </div>
        </div>
        <div className='w-1/2 px-3' >
          <Image src={trend} alt="trend_img" className=' max-w-[572px] w-full object-cover' />
        </div>
      </section>
    </main>
  );
}
