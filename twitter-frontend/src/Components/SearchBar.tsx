import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useState } from "react";
import "../Styles/SearchBar.css";

const SearchBar = () => {
    const [searched, setSearched] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setSearched(!searched);
    };

    const trends = [
        { topic: "my girl is cute", tweets: "1.5K Tweets" },
        { topic: "she's like adorable af", tweets: "2.5K Tweets" },
        { topic: "we're spending time together a lot last time", tweets: "1.2M Tweets" },
        { topic: "i haven't felt so happy for in a while", tweets: "1.5K Tweets" },
        { topic: "everything feels so easey, thanks honey", tweets: "2.5K Tweets" },
    ];

    return (
        <div className="searchbar">
            <div className="searchbar-container">
                <form>
                    <input
                        type="text"
                        placeholder="Search Twitter"
                        className="searchbar-input"
                    />
                </form>
                <Button onClick={handleClick} className="searchbar-button">
                    <SearchIcon
                        className={
                            searched ? "searchbar-button" : "searched"
                        }
                        fontSize="small"
                    />
                </Button>
            </div>
            <div className="trends">
                <h3>Trends for you</h3>
                {trends.map((trend, index) => (
                    <div key={index} className="trend">
                        <div className="trend-topic">{trend.topic}</div>
                        <div className="trend-tweets">{trend.tweets}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;