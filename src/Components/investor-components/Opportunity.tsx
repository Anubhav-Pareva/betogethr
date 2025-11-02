import { icons } from "../../Constants/Icons";

export default function Opportunity(){
    return(
            <section className="text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-8 flex-1 h-full">
              {/* Left Accent Bar with Icon */}
              <div className="flex items-center md:items-start md:flex-col gap-2 h-20 md:h-full w-full md:w-32">
                <div className="bg-violet-500 gap-2 p-6 rounded-md flex items-center justify-center h-full w-full md:w-32">
                  <img
                    src={icons.opportunityWhite}
                    className="w-10 h-10 md:w-40 md:h-40"
                  />
                  <h1 className="text-2xl block md:hidden">Market Opportunity</h1>
                </div>
              </div>
        
              {/* Right Side Text */}
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="hidden md:block text-3xl  tracking-widest">Market</h2>
                <h2 className="hidden md:block text-5xl text-yellow-500 font-extrabold tracking-widest">
                  Opportunity
                </h2>
                <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
                  With nearly 15 million monthly active users, **Betogethr** has grown
                  to become the **Global Community in Your Pocket™**, on a mission to
                  create a world where connections are meaningful, inclusive, and
                  empowering. Available in over 190 countries and territories, Betogethr
                  is often the primary way for users to meet, express themselves, and
                  explore the world around them. Since 2015, **Betogethr for Equality**
                  has worked to advance human connection, safety, and emotional
                  well-being through partnerships with organizations across the globe.
                  Betogethr has offices in West Hollywood, the Bay Area, Chicago, and
                  New York. The Betogethr app is available on the App Store and Google
                  Play.
                </p>
              </div>
            </section>
    )
}