import OrderOnlineButton from './OrderOnlineButton'
import { lobsterTwo } from '@/pages'

function OrderInfoSection() {
  return (
    <section id="pemesanan" className="mt-20">
      <h2 className={`${lobsterTwo.variable} font-lobsterTwo italic text-2xl`}>
        <span className="underline">Pemesanan</span>
      </h2>
      <div className="mt-8">
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.583"
              d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0115 0z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.583"
              d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            ></path>
          </svg>
          <h4 className="font-semibold">Lokasi</h4>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Jalan Raya Batubulan, Gianyar
        </p>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.502"
              d="M5 1.667L2.5 5v11.667a1.666 1.666 0 001.667 1.666h11.666a1.666 1.666 0 001.667-1.666V5L15 1.667H5zM2.5 5h15M13.333 8.333a3.333 3.333 0 01-6.666 0"
            ></path>
          </svg>
          <h4 className="font-semibold">Pesan Online:</h4>
        </div>

        <div className="flex flex-col gap-6 mt-6 xl:grid xl:grid-cols-3">
          <OrderOnlineButton
            name="Shopee Food"
            imgUrl="/img/shopeefood-logo.png"
          />
          <OrderOnlineButton name="GoFood" imgUrl="/img/gofood-logo.png" />
          <OrderOnlineButton name="Grab Food" imgUrl="/img/grabfood-logo.png" />
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.502"
                d="M5 1.667L2.5 5v11.667a1.666 1.666 0 001.667 1.666h11.666a1.666 1.666 0 001.667-1.666V5L15 1.667H5zM2.5 5h15M13.333 8.333a3.333 3.333 0 01-6.666 0"
              ></path>
            </svg>
            <h4 className="font-semibold">Menerima Pesanan</h4>
          </div>
          <div className="mt-6 xl:grid xl:grid-cols-3">
            <OrderOnlineButton
              name="Whatsapp"
              imgUrl="/img/whatsapp-logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default OrderInfoSection
