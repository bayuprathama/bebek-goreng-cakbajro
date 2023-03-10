import { Lobster_Two } from '@next/font/google'

export const lobsterTwo = Lobster_Two({
  weight: ['700'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--lobsterTwo',
})

function Hero() {
  return (
    <div className="flex shadow-md">
      <div className="flex-1 hidden bg-cover bg-slate-400 xl:block bg-hero"></div>
      <div className="flex-1 py-20 ">
        <h1
          className={`${lobsterTwo.variable} font-lobsterTwo italic font-bold text-5xl text-center mx-6 text-slate-900 xl:text-left xl:max-w-lg xl:text-7xl xl:mx-10`}
        >
          Nasi Bebek Goreng Sambal Hitam Madura Cak Bajro
        </h1>
        <h4 className="pt-4 mx-6 text-center text-slate-600 xl:text-left xl:max-w-lg xl:mx-10">
          Suka ayam tapi bosan makan yang itu-itu aja? Yuk cobain kuliner
          lalapan{' '}
          <span className="font-medium underline">
            bebek goreng sambal hitam
          </span>{' '}
          khas Madura kami dengan{' '}
          <span className="font-medium underline">harga yang terjangkau!</span>
        </h4>
        <div className="mt-10 xl:mx-10">
          <div className="text-center xl:text-left">
            <a
              href="#pemesanan"
              className="inline-block px-6 py-4 font-medium text-yellow-900 bg-yellow-300 rounded-lg"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
