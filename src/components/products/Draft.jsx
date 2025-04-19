import { ChevronDown, Plus, Trash2, EllipsisVertical } from "lucide-react";
import { draftContent } from "../../data";

export default function Draft() {
  return (
    <article className="lg:w-[30%]">
      <div className="w-full flex justify-between">
        <div className="flex gap-x-2 items-center">
          <h1 className="text-stone-600 text-xl font-semibold">Draft #001</h1>
          <ChevronDown />
        </div>

        <div className="flex gap-x-2 items-center">
          <Plus />
          <Trash2 />
          <EllipsisVertical />
        </div>
      </div>

      <div className="mt-10 bg-white rounded-md p-5 shadow-md">
        <div className="flex flex-col gap-y-5">
          {draftContent.map((item) => {
            return (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-x-5 items-center">
                  <div className="relative w-20 h-20 rounded-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full rounded-full"
                    />
                    <div className="absolute top-0 w-5 h-5 rounded-full flex justify-center items-center bg-gray-200 font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <h2 className="capitalize font-bold text-stone-700">
                      {item.title}
                    </h2>
                    <p className="capitalize text-stone-500">{item.desc}</p>
                  </div>
                </div>
                <p className="text-stone-700 font-bold">{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
