import Image from 'next/image'

function MealCard({
  name = 'Bebek Goreng',
  desc = '1x bebek, 1x nasi',
  price = '30000',
  imgUrl,
}) {
  return (
    <div className="px-2 py-2 mb-8 rounded-lg shadow">
      {/* img */}
      <div className="relative rounded-lg h-52 bg-slate-300">
        <Image
          className="object-cover rounded-lg"
          src={imgUrl}
          alt={name}
          fill
        />
      </div>

      {/* details */}
      <div className="px-1">
        <h4 className="mt-2 font-medium ">{name}</h4>
        <p className="mt-1 text-sm text-gray-400">{desc}</p>
        <p className="mt-3">Rp{price}</p>
      </div>
    </div>
  )
}
export default MealCard
