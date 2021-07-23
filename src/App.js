import "./App.css";
import Activites from "./components/Activities";
import Categories from "./components/Categories";
import Duration from "./components/Duration";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Region from "./components/Region";
import SubCategories from "./components/SubCategories";

function App() {
    return (
        <div>
            <Activites />
            <Categories />
            <Duration />
            <Error />
            <Loading />
            <Region />
            <SubCategories />
        </div>
    );
}

export default App;
