import clsx from 'clsx'
import Image from 'next/image'

function OrderOnlineButton({ imgUrl, name, url = '#', isDisabled }) {
  const disabledButton = 'bg-slate-200 text-slate-400 cursor-default'
  return (
    <a
      href={url}
      className={clsx(
        isDisabled ? disabledButton : 'hover:shadow',
        'flex items-center justify-center gap-2 py-3 border rounded-lg border-slate-200 '
      )}
    >
      <div className="relative">
        <Image src={imgUrl} alt={name} width={25} height={25} />
      </div>
      <p>{name}</p>
    </a>
  )
}
export default OrderOnlineButton
