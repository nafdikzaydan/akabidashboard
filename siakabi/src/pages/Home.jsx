import React from 'react'
import MenuCard from '../components/MenuCard'
import BgHome from '../assets/bg-home.png'
import LogoAkabi from '../assets/logo-akabi.jpeg'
import BudgetCard from '../components/BudgetCard'
import { Bean, Moon, Sprout, Sun, Wheat } from 'lucide-react'
import KedelaiImg from '../assets/kedelai.jpeg'
import KacangTanahImg from '../assets/kacang-tanah.jpg'
import KacangHijauImg from '../assets/kacang-hijau.jpg'
import UbiKayuImg from '../assets/ubi-kayu.jpg'
import UbiJalarImg from '../assets/ubi-jalar.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

  const commodities = [
    { id: "kedelai", label: "Kedelai" },
    { id: "kacang-tanah", label: "Kacang Tanah" },
    { id: "kacang-hijau", label: "Kacang Hijau" },
    { id: "ubi-kayu", label: "Ubi Kayu" },
    { id: "ubi-jalar", label: "Ubi Jalar" },
  ];

const Home = () => {
  const navigate = useNavigate();
  const menus = [
    {
      commodity: "Kedelai",
      path: "kedelai",
      icon: Bean,
      image: KedelaiImg
    },
    {
      commodity: "Kacang Tanah",
      path: "kacang-tanah",
      icon: Bean,
      image: KacangTanahImg
    },
    {
      commodity: "Kacang Hijau",
      path: "kacang-hijau",
      icon: Bean,
      image: KacangHijauImg
    },
    {
      commodity: "Ubi Kayu",
      path: "ubi-kayu",
      icon: Sprout,
      image: UbiKayuImg
    },
    {
      commodity: "Ubi Jalar",
      path: "ubi-jalar",
      icon: Sprout,
      image: UbiJalarImg
    },
  ]
  return (
    <div className='relative min-h-screen'>
      <div className="absolute inset-0 bg-[url('./assets/bg-kantor.jpg')] bg-cover bg-center"/>
      <div className='absolute inset-0 bg-black/50'/>
      
      <main className='relative z-10 max-w-7xl mx-auto px-4 py-4 md:py-8'>

        <header className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8'>
          <NavLink to={"/"} className='flex gap-2 justify-center md:justify-start items-center w-full'>
            <img src={LogoAkabi} alt="" className='w-8 h-8 rounded-xl shadow-md'/>
            <span className='text-white text-base lg:text-lg font-medium tracking-wider whitespace-nowrap'>
              ANEKA KACANG DAN UMBI
            </span>

          </NavLink>
          <div className='flex gap-2 justify-center md:justify-start items-center w-full'>
          </div>

          <BudgetCard />
        </header>

        <section className='flex flex-col items-center md:items-start mt-4 md:mt-24 lg:mt-44 gap-4'>
          <span className='text-white font-bold text-2xl md:text-5xl lg:text-7xl tracking-tighter'>
            SELAMAT DATANG!
          </span>
          <span className='hidden lg:flex text-white md:text-xl lg:text-3xl tracking-wider'>
            Temukan Informasi Semua Komoditas
          </span>
          <span className='text-white/70 text-sm md:text-xl font-medium mt-2 md:mt-8 lg:mt-12 tracking-wide'>
            PILIH KOMODITAS
          </span>
        </section>

        <section className='pt-2 md:pt-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4'>
            {menus.map((menu) => (
              <MenuCard 
                key={menu.commodity}
                commodity={menu.commodity}
                path={`/summary/${menu.path}`}
                // path={`/login/${menu.path}`}
                icon={menu.icon}
                image={menu.image}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home