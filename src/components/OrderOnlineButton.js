import clsx from 'clsx'
import Image from 'next/image'

function OrderOnlineButton({ imgUrl, name, url = '#' }) {
  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 py-3 border rounded-lg border-slate-200 hover:shadow"
    >
      <div className="relative">
        <Image src={imgUrl} alt={name} width={25} height={25} />
      </div>
      <p>{name}</p>
    </a>
  )
}
export default OrderOnlineButton
