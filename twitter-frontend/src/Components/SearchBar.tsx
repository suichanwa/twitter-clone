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
        { topic: "it's been a lot of time since last time i've been here", tweets: "1.5K Tweets" },
        { topic: "and", tweets: "2.5K Tweets" },
        { topic: "life feels so tiring lately, and i guess not just lately but overall", tweets: "1.2M Tweets" },
        { topic: "yk im trying to make it throw, it's getting so hard", tweets: "1.5K Tweets" },
        { topic: "but i do my best, each day and every day, i try to be better", tweets: "2.5K Tweets" },
        { topic: "and, it acutally seems to be getting better", tweets: "1.2M Tweets" },
        { topic: "i might not feel the happiest at this point or moment", tweets: "1.5K Tweets" },
        { topic: "but, i guess, im <3", tweets: "2.5K Tweets" },
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