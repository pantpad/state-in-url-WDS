import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { mockList as allItems } from "./mockItems/list";

export default function App() {
  console.log(allItems);

  const url = new URL(document.location.href);
  console.log(url.pathname);

  function addSearchParam(name: string, value: string) {
    url.searchParams.set(name, value);
    window.history.replaceState(null, "null", url);
  }

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <CurrentPage />
        <Filters addSearchParam={addSearchParam} />
        <List list={allItems} />
      </main>
    </>
  );
}
