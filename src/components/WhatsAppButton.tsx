export const WhatsAppButton = () => {
  const number = '918142149666';
  const message = encodeURIComponent('Hello! I am interested in Vyoma3D services. Please connect.');
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-24 bottom-6 z-40 group"
    >
      <div className="relative">
        <div className="relative w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border border-white/10 bg-white transition-transform transform hover:scale-105">
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="w-7 h-7 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
};
