// 1. Make a list of topics for each category

let categoryTopics = {
    informative: ["What were the causes of the Revolutionary War?", "What discoveries did Lewis and Clark make on their expedition?",
        "What are the similarities and differences between the House of Representatives and the Senate?", "Compare and contrast 2 topics of your choice", "Write about how you would make a peanut butter and jelly sandwich",
        "What are some possible solutions for students who aren't getting enough sleep?", "What can happen when people don't get enough sleep?", "Describe a sport/activity of your choice", "What are some possible effects of doing homework?",
        "What were some causes of the Civil War?", "What are some possible solutions for when students are having trouble arriving to school on time?", "What events led to the United States participating in World War 2?", "Describe what powers a president has?",
        "Write about the major accomplishments of someone of your choice", "Describe Halloween to a young child", "Write about the possible issues a school could have with vending machines in school", "Compare and contrast two different sports or activities", "What solutions are there to bullying at school?",
        "How would you make a paper airplane?", "Describe the different activites you can do at the beach", "Write about your favorite book", "What are some effects from too much rain or snow?",
    ],
   
    opinion: ["What should be the age where citizens should be able to vote?", "What would you change about your school?", "In your opinion, what is the best subject to learn about in school?", "In your opinion should middle school students have cell phones?", "Should students be given homework?", "Why should schools have recess?", "Are summer jobs beneficial to students?",
        "Would later school start times be a good idea?", "What book should your class read together?", "In your opinion when should schools get out for Christmas break?", "What is the best movie you've seen and why?", "In your opinion, where should your family go on vacation over summer break?", "Should students receive grades at school?", "What should your new school mascot be and why?",
    "Should schools have school uniforms?", "What should students be allowed to do at recess that you can't do now?", "Should classrooms in schools have parties?", "Should schools let students dress up for Halloween?", "Should your family purchase a pet? Why or why not?", "Should your school have vending machines in the lunch room?", "What makes a better pet between a cat and dog?"],
   
    narrative: ["Write a fairy tale about a princess that was turned into a woodland creature.", "Write a poem about talking cats", "Write a story where the main character loses their super powers", "Write a story where the plot involves a boy who gets lost in the woods", "Write a tall tale that describes how a known landform (Grand Canyon for example) came to be",
        "Write a short story about a day in the life of a dog from the dog's point of view", "Write a scary story about a ghost who haunts the old amusement park", "Sentence starter: It was a hot, sunny day in my hometown and I was waiting for...", "Sentence starter: My friend was laughing so hard after...", "Write a humorous story about a new student at your school that's a giraffe...",
        "Write a myth about how the moon and sun stay in the sky", "Sentence starter: A talking elephant is trying out for.....", "Write the first part of the story to this ending: my friends and I would never step foot on the ride again."],
    
    randomChoice: function () {

    }
}

$( document ).ready( function () {
    $( '.parallax' ).parallax();
} );


informativeChoice = () => {
    let informativeChoiceTopic = categoryTopics.informative[Math.floor( Math.random() * categoryTopics.informative.length )]
    console.log( informativeChoiceTopic )
    $( '#informative-topic' ).html( `${informativeChoiceTopic}` )
}
$( document ).ready( function () {
    informativeChoice();
    $( '.modal' ).modal();
} );

opinionChoice = () => {
    let opinionChoiceTopic = categoryTopics.opinion[Math.floor( Math.random() * categoryTopics.opinion.length )]
    console.log( opinionChoiceTopic )
    $( '#opinion-topic' ).html( `${opinionChoiceTopic}` )
}
$( document ).ready( function () {
    opinionChoice();
    $( 'modal' ).modal();
} );

narrativeChoice = () => {
    let narrativeChoiceTopic = categoryTopics.narrative[Math.floor( Math.random() * categoryTopics.narrative.length )]
    console.log( narrativeChoiceTopic )
    $( '#narrative-topic' ).html( `${narrativeChoiceTopic}` )
}
$( document ).ready( function () {
    narrativeChoice();
    $( 'modal' ).modal();
} );

scrollDownPage = () => {
    $( '#scroll-down' ).on( 'click', function () {
        scrollBy( {
            top: 1210,
            left: 0,
            behavior: 'smooth'
        } )
    } )
}

scrollDownPage();

// InformativePage accordion

descriptionStructureModal = () => {
    $( '#description-text-display' ).html();
    $( document ).ready( function () {
        descriptionStructureModal();
        $( '.modal' ).modal();
    } );
}

compareStructureModal = () => {
    $( '#compare-text-display' ).html();
    $( document ).ready( function () {
        compareStructureModal();
        $( '.modal' ).modal();
    } );
}

sequenceStructureModal = () => {
    $( '#sequence-text-display' ).html();
    $( document ).ready( function () {
        sequenceStructureModal();
        $( '.modal' ).modal();
    } );
}

causeEffectStructureModal = () => {
    $( '#cause-text-display' ).html();
    $( document ).ready( function () {
        causeEffectStructureModal();
        $( '.modal' ).modal();
    } );
}

// let textStructureInfo = {
//     title: ["description", "sequence", "compare and contrast"]
// }

problemStructureModal = () => {
    $( '#cause-text-display' ).html();
    $( document ).ready( function () {
        problemStructureModal();
        $( '.modal' ).modal();
    } );
}



// TO DO

    // 1. Method for getting a topic instead of 3 different functions

    // 2. Text Structure Framework for all

    // 3. Game Page

    // 4. Simplify Code in js file

