import { featureList } from "../../Constants/Data";


export default function StackedCardsSection() {
  return (
    <section className=" bg-gray-900 flex flex-col gap-12 justify-center items-center px-4 py-2 md:px-8 md:py-4">
      <h1 className="text-center text-blue-50 text-3xl md:text-4xl font-light">
        Why You’ll Love Using Our App
      </h1>
      <div className="relative  flex flex-col gap-3 max-w-7xl">
        {featureList.map((item) => (
          <div
            className={`h-80 rounded-4xl overflow-hidden p-8 sticky bg-linear-to-r ${
              item.id % 2 !== 0
                ? " from-yellow-400 via-purple-500 to-blue-500"
                : "from-blue-500 via-purple-500 to-yellow-400"
            }`}
            style={{ top: item.top }}
          >
                <h1 className="text-center text-2xl md:text-3xl text-white">{item.title}</h1>

            <div
              className="items-center justify-center h-full gap-4 p-4"
              style={{
                display: "flex",
                flexDirection: item.id % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div className="flex flex-col gap-4 w-full md:w-[50%]">
                <p className="text-white text-[18px] font-light">{item.description}</p>
              </div>
              <div className="flex items-center justify-center w-auto h-full">
                <img
                  src={item.imgUrl}
                  className="hidden md:block w-auto h-full rounded-4xl"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white opacity-0 h-80 rounded-4xl overflow-hidden p-8 sticky top-52">
          <p>hello 5</p>
        </div>
      </div>
    </section>
  );
}
