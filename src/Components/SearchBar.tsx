import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useState } from "react";
import "../Styles/SearchBar.css";

const SearchBar = () => {
    const [searched, setSearched] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setSearched(!searched);
    };

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
            </div>
        </div>
    );
};

export default SearchBar;

