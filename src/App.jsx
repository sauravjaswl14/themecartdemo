import Header from "./components/header";
import Products from "./components/products";
import SideBar from "./components/sidebar";

function App() {
  return (
    <>
      <section className="w-full h-screen flex">
        {/* <!-- side nav --> */}
        <SideBar />
        {/* <!-- navbar and product listing --> */}
        <main className="w-full">
          <Header />
          <Products />
        </main>
      </section>
    </>
  );
}

export default App;
