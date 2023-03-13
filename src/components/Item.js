import { useState } from "react";

export default function Item(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

    const simpleStyle = {display: 'inline-block'};
    const expandedStyle = {}

    return(
        <div onClick={handleClick} style={isExpanded ? expandedStyle : simpleStyle}>
            <p>I'm an item.</p>
        </div>
    )
}