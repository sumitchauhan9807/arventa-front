import '@/app/partners.css'
import { appendBaseUrl } from '@/src/helpers/common';

const Partners = (props) => {
  return (
    <section className="on-grey py-20" id="partners">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest route-tag">{props.blockHeading.heading}</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.blockHeading.content}</h2>
        </div>

        {/* Logos */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 items-start gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {props.logos.map((item, index) => {
            return (
              <div key={index} className="group flex flex-col items-center">
                {/* Logo */}
                <div className="flex mb-4 h-24 w-full items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-6 [perspective:1000px] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-100 hover:bg-white hover:shadow-xl">
                  <img
                    src={appendBaseUrl(item.image.url)}
                    alt={item.name || `Partner ${index + 1}`}
                    className="
                      max-h-12
                      w-auto
                      object-contain
                      grayscale
                      opacity-60
                      [transform-style:preserve-3d]

                      /* Mobile animation */
                      animate-partner-logo

                      /* Desktop hover animation */
                      transition-all
                      duration-700
                      ease-out
                      group-hover:[transform:rotateY(360deg)]
                      group-hover:scale-110
                      group-hover:grayscale-0
                      group-hover:opacity-100
                      cursor:pointer
                    "
                  />
                </div>

                {/* Text */}
                <h3 className="mt-4 text-center text-sm font-semibold text-gray-700">
                  <a target='_blank' href={item.link}>{item.name}</a>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
