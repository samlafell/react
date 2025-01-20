import React, { useCallback, useState, memo } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// Memoized child component - only rerenders if props change
const ListGroup = memo(function ListGroup({ items, onSelectItem }: Props) {
  console.log("ListGroup rendered");
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => onSelectItem(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const items = ["New York", "London", "Paris"];

  // Without useCallback - ListGroup rerenders on every count change
  const handleSelect = (item: string) => {
    console.log(item);
  };

  // With useCallback - ListGroup only rerenders when necessary
  const handleSelectMemoized = useCallback((item: string) => {
    console.log(item);
  }, []); // No dependencies = stable reference

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>

      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectMemoized} // Stable reference
      />
    </div>
  );
}

export default ParentComponent;
