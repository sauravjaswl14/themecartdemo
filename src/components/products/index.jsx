import Categories from "./Categories";
import Draft from "./Draft";

export default function Products() {
  return (
    <section className="min-h-screen p-5 lg:px-10 lg:py-5 bg-gray-100 flex flex-col gap-y-10  lg:flex-row lg:gap-x-10">
      <Categories />
      <Draft />
    </section>
  );
}
