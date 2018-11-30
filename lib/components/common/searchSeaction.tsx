import * as React from "react";
import * as ReactDOM from "react-dom";

class SearchSection extends React.Component{
    public render() {
        return (
            <div>
                <input className="search-input" /> 
                <button>Refresh</button>
            </div>
        );
    }
}

export default SearchSection;