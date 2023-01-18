import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
function Layouts({ children }) {
  return (
    <div>
      <Header />
      <Hero />

      {/* xl:container */}
      <main className="mx-6 text-gray-800 xl:max-w-4xl xl:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layouts
