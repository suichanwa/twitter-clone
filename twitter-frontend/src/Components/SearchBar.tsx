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
        ["my girl is cute", "1.5 Tweets"],
        ["she's like adorable af", "2.5 Tweets"],
        ["we're spending time together a lot last time", "1.2M Tweets"],
        ["i haven't felt so happy for in a while", "1.5 Tweets"],
        ["everything feels so easey, thanks honey", "2.5 Tweets"],
    ];

    return (
        <div className="searchbar">
            <div className="searchbar-container">
                <form>
                    <input
                        type="text"
                        placeholder="Search-Twitter"
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
               <div className="trends">
                    <h3>Trends for you</h3>
                    {trends.map((trend) => (
                        <div className="trend">
                            <h4>{trend[0]}</h4>
                            <p>{trend[1]}</p>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    );
};

export default SearchBar;

