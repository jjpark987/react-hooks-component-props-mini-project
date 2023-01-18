import React from "react";

function Article({ 
    title, 
    date = "January 1, 1970",
    minutes,
    preview
}) {
    let emojiCount
    let emojiRendered = ""
    // minutes < 30 ? emojiCount = Math.ceil(minutes / 5) : emojiCount = Math.ceil(minutes / 10)
    if(minutes < 30) {
        emojiCount = Math.ceil(minutes / 5)
        for(let i = 1; i <= emojiCount; i ++) {
            emojiRendered += "☕️"
        }
    } else {
        emojiCount = Math.ceil(minutes / 10)
        for(let i = 1; i <= emojiCount; i ++) {
            emojiRendered += "🍱"
        }
    }
    console.log(emojiRendered)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <span>{" · " + emojiRendered + " " + minutes + " min read"}</span>
            <p>{preview}</p>
        </article>
    )
}

export default Article