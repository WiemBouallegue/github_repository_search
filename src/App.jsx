import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import "./styles/tailwind.css";
import { searchGitHubRepo } from "./services/index";
import { useState } from "react";
import { Loading } from "./components/Loading";
import { EmptyCard } from "./components/EmptyCard";

function App() {
  const [repoDetails, setRepoDetails] = useState({
    name: "",
    author: "",
    stars: "",
    forks: "",
    authorImage: "",
    isPopular: false,
  });
  const [loading, setLoading] = useState(false);
  const [cardIsEmpty, setEmptyCard] = useState(true);
  const handleSearch = async (searhText) => {
    try {
      setEmptyCard(false);
      setLoading(true);
      let data = await searchGitHubRepo(searhText);
      setRepoDetails({
        name: data.name,
        author: data.author,
        stars: data.stars,
        forks: data.forks,
        authorImage: data.authorImage,
        isPopular: data.isPopular,
      });
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="text-center inline-block mx-auto w-[80%]">
      <SearchBar handleSearch={handleSearch} setEmptyCard={setEmptyCard} />
      <div className="pt-10">
        {" "}
        {cardIsEmpty && <EmptyCard />}
        {loading && <Loading />}
        {!cardIsEmpty && !loading && <Card repoDetails={repoDetails} />}
      </div>
    </div>
  );
}

export default App;
