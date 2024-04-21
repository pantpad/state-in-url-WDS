import { useState } from "react";
import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { mockList as allItems } from "./mockItems/list";
const url = new URL(document.location.href);

export default function App() {
  const [refreshState, setRefreshState] = useState(false);
  const q = url.searchParams.get("q");
  const pcOnly = url.searchParams.get("pcOnly");

  const items = allItems.filter((item) => {
    if (q && pcOnly)
      return (
        item.name.toLowerCase().includes(q.toLowerCase()) && item.type === "pc"
      );
    if (q) return item.name.toLowerCase().includes(q.toLowerCase());
    if (pcOnly) return item.type === "pc";

    return true;
  });

  function addSearchParam(name: string, value: string) {
    url.searchParams.set(name, value);
    window.history.replaceState(null, "null", url);
    setRefreshState((prev) => !prev);
  }

  console.log(q, pcOnly, refreshState);
  console.log(items);

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <CurrentPage />
        <Filters addSearchParam={addSearchParam} />
        <List list={items} />
      </main>
    </>
  );
}
