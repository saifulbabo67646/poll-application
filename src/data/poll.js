const POLLS = [
    {
        id: '1001',
        title: 'What is your Favourite Language',
        description: 'There are lot of popular programming languages available. Among them what is your favourite',
        options: [
            {id: '1211', value: 'C Programming', vote: 0},
            {id: '1212', value: 'Java', vote: 0},
            {id: '1213', value: 'Javascript', vote: 0},
            {id: '1214', value: 'Python', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '1002',
        title: 'Which Frontend Framework do you Prefer?',
        description: 'Javascript has a vast variety of frontend libraries and frameworks. Each and every day we have a new one. Among those which frondend frameworks you like and prefer others?',
        options: [
            {id: '1215', value: 'Angular', vote: 0},
            {id: '1216', value: 'React', vote: 0},
            {id: '1217', value: 'Vue', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '1003',
        title: 'What is the best way to create android app',
        description: 'I Want to create and android application but I dont understand which technology would be better. There are lot of technologies available and my application is not so bulky. I need an easy and simple solution, so that i can',
        options: [
            {id: '1218', value: 'Java', vote: 0},
            {id: '1219', value: 'Kotlin', vote: 0},
            {id: '1220', value: 'React Native', vote: 0},
            {id: '1221', value: 'Flutter', vote: 0}
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
]

export default POLLS;