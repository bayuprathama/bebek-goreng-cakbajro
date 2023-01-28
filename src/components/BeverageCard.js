import Image from 'next/image'

function BeverageCard({ name, desc = 'Minuman', price, imgUrl }) {
  return (
    // wrapper
    <div className="flex gap-4 px-3 py-3 mb-5 rounded-lg xl:gap-2 xl:flex-col">
      <div className="relative w-24 bg-white rounded-lg aspect-square xl:mx-auto">
        {/* image here */}
        <Image src={imgUrl} fill alt={name} className="object-contain" />
      </div>

      {/* details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
        <p className="pt-2 xl:mt-1">Rp{price}</p>
      </div>
    </div>
  )
}
export default BeverageCard
