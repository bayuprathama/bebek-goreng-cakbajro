import BeverageCard from './BeverageCard'
import MealCard from './MealCard'
import { lobsterTwo } from '@/pages'
import { makanan } from './menuData'
import { minuman } from './menuData'

function MenuSection() {
  return (
    <section id="menu" className="mt-20">
      <h2
        className={`${lobsterTwo.variable} font-lobsterTwo italic font-bold text-2xl`}
      >
        <span className="underline">Menu</span>
      </h2>

      {/* makanan */}
      <div className="mt-8 xl:gap-8 xl:grid xl:grid-cols-2">
        {/* card */}
        {makanan.map((item) => (
          <MealCard
            key={item.name}
            name={item.name}
            desc={item.description}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>

      {/* Minuman */}
      <div className="mt-10 ">
        <h2
          className={`${lobsterTwo.variable} font-lobsterTwo italic text-2xl`}
        >
          <span className="underline">Minuman</span>
        </h2>
        {/* Card here */}
        <div className="mt-8 xl:grid xl:grid-cols-5 xl:gap-6">
          {minuman.map((item) => (
            <BeverageCard
              name={item.name}
              desc={item.description}
              imgUrl={item.imgUrl}
              price={item.price}
              key={item.name}
            />
          ))}
        </div>
      </div>
      <p className="mt-6 text-xs mt text-slate-400">
        *harga yang tercantum dalam menu sewaktu-waktu dapat berubah
      </p>
    </section>
  )
}
export default MenuSection
