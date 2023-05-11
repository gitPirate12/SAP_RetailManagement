import { useState, useEffect } from "react";
import { useItemsContext } from "../../hooks/useItemsContext";
import InventoryDetails from "./InventoryDetails";
import SearchFilter from "./SearchFilter";

const ItemDisplay = () => {
  const { items, dispatch } = useItemsContext();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:5000/api/v1/get-items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  return (
    <div><SearchFilter onSearch={handleSearch} />
    <div className="home">
      
      <div className="Items">
        {filteredItems &&
          filteredItems.map((item) => (
            <InventoryDetails item={item} key={item._id} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default ItemDisplay;
