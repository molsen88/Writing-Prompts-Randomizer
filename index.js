// 1. Make a list of topics for each category

let categoryTopics = {
    informative: ["What were the causes of the Revolutionary War?", "What discoveries did Lewis and Clark make on their expedition?",
        "What are the differences between the House of Representatives and the Senate?"],
    opinion: ["Should students be given homework?", "Why should schools have recess?", "Are summer jobs beneficial to students?",
        "Would later school start times be a good idea?"],
    narrative: ["Poem about cats", "Story with a character who is a superhero who loses their powers", "Plot: a lost dog who is found"],
    randomChoice: function () {

    }
}

// 2. Get a random topic from a category
informativeChoice = () => {
    document.getElementById( 'informative-button' ).addEventListener( 'click', function () {
        let informativeChoiceTopic = categoryTopics.informative[Math.floor( Math.random() * categoryTopics.informative.length )]
        console.log( informativeChoiceTopic )
        document.getElementById( 'chosen-topic' ).innerHTML = `Your prompt is: "${informativeChoiceTopic}"`
    } )
}
informativeChoice();

opinionChoice = () => {
    document.getElementById( 'opinion-button' ).addEventListener( 'click', function () {
        let opinionChoiceTopic = categoryTopics.opinion[Math.floor( Math.random() * categoryTopics.opinion.length )]
        console.log( opinionChoiceTopic )
        document.getElementById( 'chosen-topic' ).innerHTML = `Your prompt is: "${opinionChoiceTopic}"`
    } )
}
opinionChoice();

narrativeChoice = () => {
    document.getElementById( 'narrative-button' ).addEventListener( 'click', function () {
        let narrativeChoiceTopic = categoryTopics.narrative[Math.floor( Math.random() * categoryTopics.narrative.length )]
        console.log( narrativeChoiceTopic )
        document.getElementById( 'chosen-topic' ).innerHTML = `Your prompt is: "${narrativeChoiceTopic}"`
    } )
}
narrativeChoice();


// 3. Make lists more specific with text structure