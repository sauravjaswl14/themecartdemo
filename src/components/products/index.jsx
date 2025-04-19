import Categories from "./Categories";
import Draft from "./Draft";

export default function Products() {
  return (
    <section className="h-screen px-10 py-5 bg-gray-100 flex gap-x-10">
      <Categories />
      <Draft />
    </section>
  );
}
