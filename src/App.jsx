import { useState } from "react";
import Header from "./components/header";
import Products from "./components/products";
import SideBar from "./components/sidebar";

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  function handleToggleSideBar() {
    setToggleSideBar((prev) => !prev);
  }
  return (
    <>
      <section className="w-full h-screen flex">
        {/* <!-- side nav --> */}
        <SideBar isOpen={toggleSideBar} />
        {/* <!-- navbar and product listing --> */}
        <main className="w-full">
          <Header onToggle={handleToggleSideBar} />
          <Products />
        </main>
      </section>
    </>
  );
}

export default App;
