import { useState } from 'react';

interface Props{
    items: string[];
    heading: string;
    onSelectItem:(item: string) => void;
}

function ListGroup({ items,heading}: Props) {
 
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index:number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1> 
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
