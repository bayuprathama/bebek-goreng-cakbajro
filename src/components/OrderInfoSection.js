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
          Jl. Raya Batubulan No.28x, Batubulan, Kec. Sukawati, Kabupaten
          Gianyar, Bali 80237
        </p>
        <div className="mt-3 xl:grid xl:grid-cols-3 xl:gap-6">
          <OrderOnlineButton
            name="Google Maps"
            imgUrl="/img/googlemaps-logo.png"
            url="https://goo.gl/maps/tBchhT5Fy7A89TxVA"
          />
        </div>
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

        <h4 className="pt-2 text-red-500">[Segera hadir!]</h4>
        <div className="flex flex-col gap-4 mt-6 xl:gap-6 xl:grid xl:grid-cols-3">
          <OrderOnlineButton
            name="Shopee Food"
            imgUrl="/img/shopeefood-logo.png"
            isDisabled={true}
            url="#shopeefood"
          />
          <OrderOnlineButton
            name="GoFood"
            imgUrl="/img/gofood-logo.png"
            isDisabled={true}
            url="#gofood"
          />
          <OrderOnlineButton
            name="Grab Food"
            imgUrl="/img/grabfood-logo.png"
            isDisabled={true}
            url="#grabfood"
          />
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
              url="https://wa.link/17eh5a"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default OrderInfoSection
