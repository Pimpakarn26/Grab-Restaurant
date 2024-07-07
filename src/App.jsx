import "./App.css";
import Search from "./components/Search";
import Restaurants from "./components/Restaurants";
import Header from "./components/Header";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurants from an API or a static file
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurants restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
