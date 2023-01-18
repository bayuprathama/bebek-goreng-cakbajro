import Image from 'next/image'

function BruceLeeQuote() {
  return (
    <section className="mx-auto mt-48 xl:max-w-sm">
      <div className="relative rounded-lg bg-gray-50">
        <div className="absolute w-20 -translate-x-1/2 rounded-full aspect-square -top-10 left-1/2">
          <Image
            src="/img/bruce-lee.jpg"
            alt="bruce lee"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="px-8 pt-16 pb-8">
          <p className="text-sm italic font-medium">
            &quot;I fear not the man who has practiced 10,000 kicks once, but I
            fear the man who has practiced one kick 10,000 times.&quot; - Bruce
            Lee
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Walau hanya memiliki 1 hidangan menu, kami akan terus menjaga serta
            meningkatkan rasa dan kualitas agar dapat memberikan yang terbaik.
          </p>
        </div>
      </div>
    </section>
  )
}
export default BruceLeeQuote
