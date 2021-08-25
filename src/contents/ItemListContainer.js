import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer= () => {

  const test = () => {}

    return (
    <>
    <ItemList />
    <ItemCount stock={5} onAdd={test} initial={1}/>
    </>
    )
  }

  export default ItemListContainer;
  