type FiltersType = {
  addSearchParam: (name: string, value: string) => void;
};

export default function Filters({ addSearchParam }: FiltersType) {
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    addSearchParam("pcOnly", e.target.checked.toString());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    addSearchParam("q", e.target.value);
  }

  return (
    <>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="search">Title</label>
          <input
            type="text"
            id="search"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="filter">Only Computer Items</label>
          <input type="checkbox" id="filter" onChange={handleCheck} />
        </div>
      </form>
    </>
  );
}
