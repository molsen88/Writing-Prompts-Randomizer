// 1. Make a list of topics for each category

let categoryTopics = {
    informative: ["What were the causes of the Revolutionary War?", "What discoveries did Lewis and Clark make on their expedition?",
        "What are the similarities and differences between the House of Representatives and the Senate?"],
    opinion: ["Should students be given homework?", "Why should schools have recess?", "Are summer jobs beneficial to students?",
        "Would later school start times be a good idea?"],
    narrative: ["Poem about cats", "Story with a character who is a superhero who loses their powers", "Plot: a lost dog who is found"],
    randomChoice: function () {

    }
}


informativeChoice = () => {
    let informativeChoiceTopic = categoryTopics.informative[Math.floor( Math.random() * categoryTopics.informative.length )]
    console.log( informativeChoiceTopic )
    $( '#informative-topic' ).html( `Your prompt is: "${informativeChoiceTopic}"` )
}
$( document ).ready( function () {
    informativeChoice();
    $( '.modal' ).modal();
} );

opinionChoice = () => {
    let opinionChoiceTopic = categoryTopics.opinion[Math.floor( Math.random() * categoryTopics.opinion.length )]
    console.log( opinionChoiceTopic )
    $( '#opinion-topic' ).html( `Your prompt is: "${opinionChoiceTopic}"` )
}
$( document ).ready( function () {
    opinionChoice();
    $( 'modal' ).modal();
} );

narrativeChoice = () => {
    let narrativeChoiceTopic = categoryTopics.narrative[Math.floor( Math.random() * categoryTopics.narrative.length )]
    console.log( narrativeChoiceTopic )
    $( '#narrative-topic' ).html( `Your prompt is: "${narrativeChoiceTopic}"` )
}
$( document ).ready( function () {
    narrativeChoice();
    $( 'modal' ).modal();
} );




// $( document ).ready( function () {
//     opinionChoice = () => {
//         $( '#opinion-button' ).on( 'click', function () {
//             let opinionChoiceTopic = categoryTopics.opinion[Math.floor( Math.random() * categoryTopics.opinion.length )]
//             console.log( opinionChoiceTopic )
//             $( '#chosen-topic' ).html( `Your prompt is: "${opinionChoiceTopic}"` )
//         } )
//     }
//     $( '.modal' ).modal();
// } )

// 2. Get a random topic from a category
// informativeChoice = () => {
//     $( '#modal1' ).on( 'click', function () {
//         let informativeChoiceTopic = categoryTopics.informative[Math.floor( Math.random() * categoryTopics.informative.length )]
//         console.log( informativeChoiceTopic )
//         $( '#chosen-topic' ).html( `Your prompt is: "${informativeChoiceTopic}"` )
//     } )
// }
// informativeChoice();

// opinionChoice = () => {
//     $( document ).ready( function () {
//         $( '.modal' ).modal();
//     } );
//     $( '#modal1' ).on( 'click', function () {
//         let opinionChoiceTopic = categoryTopics.opinion[Math.floor( Math.random() * categoryTopics.opinion.length )]
//         console.log( opinionChoiceTopic )
//         $( '#chosen-topic' ).html( `Your prompt is: "${opinionChoiceTopic}"` )
//     } )
// }
// opinionChoice();


// narrativeChoice = () => {
//     $( '#modal1' ).on( 'click', function () {
//         let narrativeChoiceTopic = categoryTopics.narrative[Math.floor( Math.random() * categoryTopics.narrative.length )]
//         console.log( narrativeChoiceTopic )
//         $( '#narrative-prompt' ).html( `Your prompt is: "${narrativeChoiceTopic}"` )
//     } )
// }
// narrativeChoice();


// $( '#exampleModal' ).on( 'shown.bs.modal', function () {
//     $( '#myInput' ).trigger( 'focus' )
// } )
// 3. Make lists more specific with text structure


// TO DO

    // 1. Method for getting a topic instead of 3 different functions

    // 2. Design

    // 3. Add more topics