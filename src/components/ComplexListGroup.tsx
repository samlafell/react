import { useState } from "react";

function ListGroup() {
  // Multiple state variables
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [items, setItems] = useState([
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCity, setNewCity] = useState("");

  // Derived state (computed from other state)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    // You can update multiple states in response to one event
    console.log(`Selected: ${items[index]}`);
  };

  const handleAddItem = (newItem: string) => {
    // Convert to lowercase for case-insensitive comparison
    const normalizedNewItem = newItem.trim();
    const exists = items.some(
      (item) => item.toLowerCase() === normalizedNewItem.toLowerCase()
    );

    if (normalizedNewItem && !exists) {
      setItems([...items, normalizedNewItem]);
      setNewCity(""); // Clear the input
    } else if (exists) {
      // Optionally: Add feedback that city already exists
      alert(`${newItem} is already in the list!`);
      // Or use a more elegant solution like a warning message in the UI
    }
  };

  return (
    <>
      <h1>List</h1>
      {/* Add new city form */}
      <div className="mb-3">
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Enter new city"
          className="form-control"
        />
        <button
          onClick={() => handleAddItem(newCity)}
          className="btn btn-primary mt-2"
        >
          Add City
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cities..."
      />

      {filteredItems.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {filteredItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
