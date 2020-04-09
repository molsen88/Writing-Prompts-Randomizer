// 1. Make a list of topics for each category

let categoryTopics = {
    informative: ["What were the causes of the Revolutionary War", "What discoveries did Lewis and Clark make on their expedition?",
        "What are the differences between the House of Representatives and the Senate?"],
    opinion: ["Should students be given homework?", "Why should schools have recess?", "Are summer jobs beneficial to students?",
        "Would school start times be a good idea?"],
    narrative: ["Poem about cats", "Story with a character who is a superhero who loses their powers", "Plot: a lost dog who is found"]
}

// 2. Get a random topic from a category
randomChoice = () => {
    let choice = categoryTopics.informative[Math.floor( Math.random() * categoryTopics.informative.length )]
    console.log( choice )
    document.getElementById( 'chosen-topic' ).innerHTML = choice;
}
randomChoice();


// 3. Make lists more specific with text structure