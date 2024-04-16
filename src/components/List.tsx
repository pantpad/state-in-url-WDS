import { listItem } from "../mockItems/list";

type ListProps = {
  list: listItem[];
};

export default function List({ list }: ListProps) {
  return (
    <>
      <ul className="text-left">
        {list.map((item) => (
          <li key={item.id}>--{item.name}</li>
        ))}
      </ul>
    </>
  );
}
