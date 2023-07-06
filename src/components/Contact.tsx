function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Pour me <span>contacter</span></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full">
              <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="Phone Icon" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg font-semibold">Téléphone</h1>
              <h2 className="text-lg">06.73.05.03.60</h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full">
              <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="Email Icon" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg font-semibold">Email</h1>
              <h2 className="text-lg">romainmoureu@gmail.com</h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full">
              <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="Location Icon" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg font-semibold">Adresse</h1>
              <h2 className="text-lg">Toulouse, France</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;