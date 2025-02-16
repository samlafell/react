import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

// Styled unordered list with no default list styles
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Interface for ListItem props to determine if the item is active
interface ListItemProps {
  active: boolean;
}

// Styled list item that changes background color based on the 'active' prop
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${props => props.active ? "blue" : "transparent"};
`

// Props interface for the ListGroup component
interface Props {
  items: string[]; // Array of item strings to display
  heading: string; // Heading for the list group
  onSelectItem: (item: string) => void; // Callback when an item is selected
}

// ListGroup component displays a list of items with a heading
function ListGroup({ items, heading, onSelectItem }: Props) {
  // State to keep track of the currently selected item's index
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* Display the heading */}
      <h1>{heading}</h1>
      
      {/* Show a message if there are no items */}
      {items.length === 0 && <p>No item found</p>}
      
      {/* Render the list of items */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index} // Determine if the item is active
            key={item} // Unique key for each item
            onClick={() => {
              setSelectedIndex(index); // Update the selected index
              onSelectItem(item); // Trigger the callback with the selected item
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
