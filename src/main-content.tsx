export default function MainContent() {
  return (
    <main className="h-screen bg-[#38BDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 p-47">
        <h1 className="text-3xl font-bold text-gray-900 justify-center text-center">TECHLAB</h1>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Techlab a gamified Learning management system that allows students to learn and practice their skills
        </p>
            <div className="flex justify-center items-center h-20">
         <a href="#features_drop_anim" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-xl">
          Get Started
        </a>
               </div>
      </div>   

      <section id="features_drop_anim" className="bg-[##F8FAFC] h-screen">
        <h2>Intro</h2>
      </section>

    </main>
    
  )
}