import React from "react";

export interface ITruncateText {
    text: string;
    wordLimit?: number;
}

const TruncateText: React.FC<ITruncateText> = ({ text, wordLimit = 6 }) => {
    const words = text.split(' ');

    const truncateText = words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;

    return <>{truncateText}</>
}

export default TruncateText;