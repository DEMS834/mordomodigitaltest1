export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f9f6f2] text-black font-sans">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-[#f5eee7] sticky top-0 z-50">
        <div className="text-2xl font-serif">Mordomo Digital</div>
        <button className="bg-[#d2b48c] text-white px-6 py-2 rounded-2xl shadow hover:bg-[#b89c76] transition duration-300">
          Pedir Orçamento
        </button>
      </nav>

      {/* Header Section */}
      <section className="text-black py-20 px-6 bg-[#f5eee7] relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">A tua presença digital começa aqui</h1>
          <p className="text-lg md:text-xl text-[#4e4e4e]">
            Ajudamos pequenas e médias empresas a entrar no mundo digital com soluções simples, elegantes e com acompanhamento total — tudo num só lugar.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/mordomo-digital-butler.png"
            alt="Mordomo Digital com smartphone"
            className="w-80 md:w-96 object-contain"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-12">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Criação de Websites", icon: "🌐", desc: "Websites únicos, rápidos, responsivos e sofisticados." },
            { title: "Aplicações Web e Mobile", icon: "📱", desc: "Apps intuitivas para Android, iOS e Web." },
            { title: "Gestão de Agendas Digitais", icon: "🗓️", desc: "Automação e integração com calendários." },
            { title: "Gestão de Tráfego Pago", icon: "📈", desc: "Campanhas estratégicas em Google e redes sociais." },
            { title: "Redes Sociais com Estilo", icon: "📣", desc: "Conteúdo alinhado à tua identidade visual." },
            { title: "Consultoria e Suporte Premium", icon: "🤝", desc: "Acompanhamento personalizado contínuo." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif mb-3 text-[#2c2c2c]">{service.title}</h3>
              <p className="text-sm text-[#4e4e4e]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f5eee7] py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-6">Contacto</h2>
        <p className="max-w-3xl mx-auto text-lg text-[#555] mb-10">
          Fala connosco! Preenche o formulário abaixo ou agenda uma reunião connosco.
        </p>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4" action="https://formspree.io/f/meqyvbdp" method="POST">
          <input type="text" name="name" placeholder="Nome" required className="w-full p-3 border rounded-md" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded-md" />
          <textarea name="message" placeholder="Mensagem" required className="w-full p-3 border rounded-md" rows="4"></textarea>
          <button type="submit" className="bg-[#d2b48c] text-white px-6 py-2 rounded-2xl shadow hover:bg-[#b89c76] transition duration-300">
            Enviar Mensagem
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="bg-[#2c2c2c] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4 tracking-tight">Serviços à tua medida</h2>
        <p className="text-lg text-gray-300 mb-6">Solicita uma proposta personalizada ou agenda uma reunião connosco.</p>
        <button className="bg-white text-black px-6 py-2 rounded-2xl shadow">Pedir Orçamento</button>
      </section>
    </main>
  );
}
