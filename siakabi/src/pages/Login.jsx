import React from "react";
import BgKantor from '../assets/bg-kantor.jpg'
import Logo from "../assets/logo-akabi.jpeg";
import GoogleLogo from "../assets/google.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { commodities } from '../data/commodities'

const commodityLabels = {
  kedelai: "Kedelai",
  "kacang-tanah": "Kacang Tanah",
  "kacang-hijau": "Kacang Hijau",
  "ubi-kayu": "Ubi Kayu",
  "ubi-jalar": "Ubi Jalar",
};

export default function Login() {
  const params = useParams();
  const navigate = useNavigate();

  const commodity = commodities.find(
    (item) => item.id === params.commodity
  );

  // if (!commodity) {
  //   return <p>Komoditas tidak ditemukan.</p>;
  // }

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    navigate("/home"); 
  };

  return (
    <>
      <main
        className="min-h-dvh w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url(${BgKantor})` }}
      >
        <div className='absolute inset-0 bg-black/50'/>
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/30 p-4 md:p-8 rounded-2xl shadow-xl flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-2">
            <img src={Logo} alt="chill-app-icon" className="h-4 md:h-8 w-auto object-contain rounded-md" />
            <span className="text-base md:text-lg text-white tracking-wide">ANEKA KACANG DAN UMBI</span>
          </div>
          
          <div className="text-center pt-4 md:pt-8 w-full gap-4">
            <h1 className="text-2xl font-bold text-white">Masuk</h1>
            {/* <p className="text-sm text-white">Temukan Informasi Komoditas {commodity.label}</p> */}
          </div>
          
          <form action="#" method="POST" onSubmit={handleLogin} className="w-full flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Masukkan username"
                required
                className="w-full px-4 py-2 border border-zinc-700 rounded-3xl text-sm text-white"
              />
            </div>
            
            <PasswordInput label="Kata Sandi" input="Masukkan kata sandi"/>
            
            <div className="flex items-center justify-between text-xs text-white/50 my-1">
              <p>
                Belum punya akun? <Link to="/register" className="text-zinc-300 font-semibold hover:underline">Daftar</Link>
              </p>
              <a href="/change-password" className="text-zinc-300 hover:underline">Lupa kata sandi?</a>
            </div>
            
            <div className="flex flex-col items-center gap-3 mt-2 w-full">
              <button 
                type="submit" 
                className="w-full py-2.5 bg-green-800 hover:bg-green-900 text-white font-medium rounded-3xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Masuk
              </button>
              
              {/* <p className="text-xs text-zinc-500 font-medium">atau</p>
              
              <button 
                type="button" 
                className="w-full py-2.5 border border-zinc-700 bg-transparent hover:bg-zinc-800 text-white font-medium rounded-3xl text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
              >
                <img src={GoogleLogo} alt="Google" className="h-4 w-4" />
                <span>Masuk dengan Google</span>
              </button> */}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}


// import { useParams } from "react-router-dom";
// import { commodities } from "../data/commodities";

// function Login() {
//   const { commodity } = useParams();

//   const selectedCommodity = commodities.find(
//     (item) => item.id === commodity
//   );

//   if (!selectedCommodity) {
//     return <h1>Komoditas tidak ditemukan</h1>;
//   }

//   return (
//     <div>
//       <h1>Login {selectedCommodity.name}</h1>
//     </div>
//   );
// }

// export default Login;