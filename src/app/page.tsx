

export default function Home() {
  return (
    <div className="min-h-screen  bg-[#00001a]  text-gray-800">
      <head>
        <title>Cryptcoin</title>
      </head>
      <header className="bg-blue-900 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">Cryptcoin</div>
        </nav>
        <div className="container mx-auto text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cryptcoin</h1>
          <p className="text-lg md:text-2xl mb-6">Invest in yourself</p>
          <a href="register" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">Get Started</a>
        </div>
      </header>
      <section id="about" className="container mx-auto py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Cryptcoin</h2>
        <p className="text-lg md:text-xl">CryptCoin lets you become the investor you deserve to be</p>
      </section>
      
      <section id="features" className="container mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Secure</h3>
            <p>Top-notch security to keep your investments safe.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Innovative</h3>
            <p>Leading-edge technology for seamless transactions.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Reliable</h3>
            <p>Dependable performance you can trust.</p>
          </div>
        </div>
      </section>
      
      <section id="contact" className="container mx-auto py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg md:text-xl">Have questions? We're here to help.</p>
      </section>
      
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CryptCoin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
  }



  
