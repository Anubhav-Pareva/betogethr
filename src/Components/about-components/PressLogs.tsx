interface PressLogosProps{
  items:any[];
  title:string;
}

export default function PressLogos({ items, title }:PressLogosProps) {
  return (
    <section className="py-12 px-6 bg-white rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xl text-gray-900 mb-6">{title}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {items.map((logo) => (
            <figure key={logo.id} className="flex items-center justify-center p-2 w-full">
              <img
                src={logo.url}
                alt={logo.alt || `Logo ${logo.id + 1}`}
                className="max-h-40 opacity-70 hover:opacity-100 transition-opacity duration-200 object-contain"
                loading="lazy"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
