import { images } from "../Constants/Images";

export default function StackedCardsSection() {
  return (
    <section className=" bg-gray-900 flex flex-col gap-12 justify-center p-4 md:p-8">
      <h1 className="text-center text-blue-50 text-3xl md:text-4xl font-light">
        Why You’ll Love Using Our App
      </h1>
      <div className="relative  flex flex-col gap-3">
        <div className="bg-amber-500 h-80 rounded-4xl overflow-hidden p-8 sticky top-20">
          <div className="flex h-full">
            <p className="w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
            <div className="items-center justify-center w-[50%]">
              <img
                src={images.cardpic1}
                className="hidden md:block w-auto h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-500 h-80 rounded-4xl overflow-hidden p-8 sticky top-28">
          <p>hello 2</p>
        </div>
        <div className="bg-violet-500 h-80 rounded-4xl overflow-hidden p-8 sticky top-36">
          <p>hello 3</p>
        </div>
        <div className="bg-blue-500 h-80 rounded-4xl overflow-hidden p-8 sticky top-44">
          <p>hello 4</p>
        </div>
        <div className="bg-yellow-500 h-80 rounded-4xl overflow-hidden p-8 sticky top-52">
          <p>hello 5</p>
        </div>
        <div className="bg-white opacity-0 h-80 rounded-4xl overflow-hidden p-8 sticky top-52">
          <p>hello 5</p>
        </div>
      </div>
    </section>
  );
}
