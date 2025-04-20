import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { categories } from "../../data";
import { foodItems } from "../../data";

export default function Categories() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <main className="lg:w-[70%]">
      {/* Header with arrows */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-stone-600 text-xl font-semibold">Categories</h1>
        <div className="flex gap-x-2 items-center">
          <button onClick={scrollLeft}>
            <ChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Slider */}
      <div
        ref={sliderRef}
        className="w-full my-10 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((item) => (
          <div
            key={item.id}
            className="w-32 h-38 bg-white rounded-md p-5 flex flex-col gap-y-5 justify-center items-center flex-shrink-0"
          >
            <img src={item.img} className="" alt={item.categoryName} />
            <p className="capitalize text-stone-600 font-bold">
              {item.categoryName}
            </p>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {foodItems.map((item) => {
          return (
            <div key={item.id} className="p-3 w-full bg-white rounded-md">
              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full h-[130px] md:h-[180px]">
                  <img
                    src={item.img}
                    alt={item.nameOfFood}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col gap-y-[2px]">
                    <h4 className="capitalize font-bold text-stone-700 ">
                      {item.nameOfFood}
                    </h4>
                    <p className="capitalize">{item.desc}</p>
                  </div>
                  <div className="flex justify-end">
                    <p className="font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
