import Search from "../Component/Search";
import Dropdown from "../Component/DropDown";

let data = ["Ram", "Shyam", "Geeta"];

const DropdownData = data.filter(data => data) 

function App() {
  const searchData = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Search search={searchData} />
      <Dropdown data={DropdownData} />
    </div>
  );
}

export default App;
