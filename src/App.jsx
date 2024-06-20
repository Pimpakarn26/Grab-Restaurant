import "./App.css";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";
import Hearder from "./components/Hearder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container flex flex-col items-center mx-auto space-y-4">
        <Hearder />
        <Search />
        <Restaurant />
      </div>
    </>
  );
}

export default App;
