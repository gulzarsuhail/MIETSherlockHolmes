var phoneNum = 1234567890;

module.exports = {
    notes: [
        {
            date: '11:20 13/3/18',
            note: 'TODO: Buy the book The Time Machine, Apply for job at the factory'
        },
        {
            date: '22:18 15/3/18',
            note: 'One<br>[5, 12, 3], [79, 16, 4], [11, 5, 11], [2, 2, 6], [73, 12, 6]'
        },
        {
            date: '11:20 15/3/18',
            note: 'Two<br>[7, 17, 7], [17, 21, 3], [3, 10, 4], [45, 20,5]'
        }
    ],

    phoneLogs: [
        {
            name: 'Jenny',
            type: 'picked',
            time: '08:10 12/3/18'
        },
        {
            name: 'Sam',
            type: 'dialed',
            time: '08:10 12/3/18'
        },
        {
            name: 'Mom',
            type: 'picked',
            time: '12:32 13/3/18'
        },
        {
            name: 'Jenny',
            type: 'missed',
            time: '20:21 13/3/18'
        },
        {
            name: 'Mom',
            type: 'picked',
            time: '00:10 14/3/18'
        },
        {
            name: 'Jenny',
            type: 'missed',
            time: '12:23 14/3/18'
        },
        {
            name: 'Jenny',
            type: 'missed',
            time: '16:53 14/3/18'
        },
        {
            name: 'Jenny',
            type: 'missed',
            time: '18:23 12/3/18'
        }
    ],

    messages: [
        {
            from: 'Jenny',
            text: [
                {
                    user: 1,
                    text: 'Hey where are you? Trying to contact you since last Monday',
                    date: '6:03 11/3/18'
                },
                {
                    user: 0,
                    text: "Sorry Jenny. I lost my phone a few days back and had to get a new one.",
                    date: '7:43 12/3/18'
                },
                {
                    user: 0,
                    text: "Also, I've been really busy since last few days.",
                    date: '7:43 12/3/18'
                },
                {
                    user: 1,
                    text: 'Is everything OK?',
                    date: '17:54 12/3/18'
                },
                {
                    user: 0,
                    text: "I don't know where my life is going. I have no clue.",
                    date: '00:12 13/3/18'
                },
                {
                    user: 1,
                    text: "Han, don't worry everything will get better with time.",
                    date: '00:13 13/3/18'
                },
                {
                    user: 1,
                    text: "Happy birthday Han, hope this year will turn out better.",
                    date: '00:01 14/3/18'
                },
                {
                    user: 0,
                    text: "Thanks Jenny.",
                    date: '14:13 14/3/18'
                },
                {
                    user: 1,
                    text: "Where are you at?.",
                    date: '12:42 15/3/18'
                },
                {
                    user: 1,
                    text: "I'm worried.",
                    date: '18:23 15/3/18'
                },
                {
                    user: 1,
                    text: "Dude, why are you not attending your calls?",
                    date: '20:55 15/3/18'
                },
                {
                    user: 1,
                    text: "I'm calling the cops to check on you.",
                    date: '23:00 15/3/18'
                },
                {
                    user: 1,
                    text: "Dude?",
                    date: '23:03 15/3/18'
                }
            ]
        },
        {
            from: 'Sam',
            text: [
                {
                    user: 1,
                    text: 'Happy birthday man.',
                    date: '01:03 14/3/17'
                },
                {
                    user: 0,
                    text: "Thanks dude.",
                    date: '14:13 14/3/17'
                },
                {
                    user: 0,
                    text: 'Happy birthday bud :)',
                    date: '05:04 4/4/17'
                },
                {
                    user: 1,
                    text: "Thanks man.",
                    date: '12:03 4/4/17'
                },
                {
                    user: 1,
                    text: "Happy birthday bro.",
                    date: '01:03 14/3/18'
                }
            ]
        },
        {
            from: 'Unknown',
            text: [
                {
                    user: 0,
                    text: 'Hello. Can I know who is there?',
                    date: '10:15 13/03/18',
                },
                {
                    user: 1,
                    text: 'You can call me Mr. M. Your well wisher.',
                    date: '10:20 13/03/18',
                },
                {
                    user: 0,
                    text: 'What?',
                    date: '10:27 13/03/18',
                },
                {
                    user: 1,
                    text: 'I know you are fed up and you are giving up on life.',
                    date: '10:28 13/03/18',
                },
                {
                    user: 1,
                    text: 'I want to provide you with an opportuinity.',
                    date: '10:29 13/03/18',
                },
                {
                    user: 1,
                    text: 'I want to give you a life you deserve',
                    date: '10:29 13/03/18',
                },
                {
                    user: 0,
                    text: "Man, look I'm already tired of my life. Could you please stop with whatever this is?",
                    date: '10:32 13/03/18',
                },
                {
                    user: 1,
                    text: 'Happy birthday friend.',
                    date: '10:10 14/03/18',
                },
                {
                    user: 0,
                    text: 'What the? How did you know it was my birthday?',
                    date: '10:17 14/03/18',
                },
                {
                    user: 1,
                    text: "I'm with the police and we need your help in solving a crime.",
                    date: '12:43 14/03/18',
                },
                {
                    user: 0,
                    text: 'How much will it pay?',
                    date: '12:44 14/03/18',
                },
                {
                    user: 0,
                    text: 'And what will I have to do?',
                    date: '12:144 14/03/18',
                },
                {
                    user: 1,
                    text: 'You will be set for life. Lets meet in person tomorrow and we will talk',
                    date: '10:10 14/03/18',
                },
                {
                    user: 1,
                    text: 'Also, I want you to buy a book named "A Time Machine" by HG Wells',
                    date: '10:11 14/03/18',
                },
                {
                    user: 0,
                    text: 'OK.',
                    date: '10:10 14/03/18',
                },
                {
                    user: 1,
                    text: 'I am waiting for you downstairs.',
                    date: '8:21 15/03/18',
                },
                {
                    user: 0,
                    text: 'OK comming.',
                    date: '8:23 15/03/18',
                },
                {
                    user: 0,
                    text: 'WTH Mr. M. I am scared what were the bombs for',
                    date: '19:32 15/03/18',
                },
                {
                    user: 1,
                    text: 'Dont worry its just police work. Trust me.',
                    date: '19:35 15/03/18',
                },
                {
                    user: 0,
                    text: 'Something seems off. I am calling the police and sending the disarm message.',
                    date: '20:01 15/03/18',
                },
                {
                    user: 1,
                    text: 'Most of the police department is currupt. You risk national security if you tell anyone.',
                    date: '20:05 15/03/18',
                },
                {
                    user: 1,
                    text: 'Wait a second. I am sending over some some agents.',
                    date: '20:05 15/03/18',
                },
                {
                    user: 1,
                    text: 'They will explain everything you need to know.',
                    date: '20:07 15/03/18',
                },
                {
                    user: 1,
                    text: 'Go with them.',
                    date: '20:08 15/03/18',
                },
                {
                    user: 0,
                    text: 'OK. I hope you are telling the truth.',
                    date: '20:10 15/03/18',
                },
                {
                    user: 1,
                    text: 'Knock Knock.',
                    date: '20:12 15/03/18',
                }
            ]
        },
        {
            from: phoneNum,
            text: [
                {
                    user: 0,
                    text: 'Hey man. I was told to text you to set some sort of plan in action.',
                    date: '13:03 15/3/17'
                },
                {
                    user: 1,
                    text: "Code rejected. 2 attempts remaining.",
                    date: '13:04 14/3/17'
                },
                {
                    user: 0,
                    text: 'What?',
                    date: '13:05 14/4/17'
                },
                {
                    user: 1,
                    text: "Code rejected. 1 attempt remaining.",
                    date: '13:05 14/3/17'
                },
                {
                    user: 0,
                    text: "as happy as darkness",
                    date: '13:07 14/3/18'
                },
                {
                    user: 1,
                    text: "Code accepted. Time set: 12:00 PM 17/03/2018.",
                    date: '13:07 14/3/17'
                },
            ]

        },
    ]
}