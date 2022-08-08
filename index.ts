// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function showReviewTotal (value : number, reviewer : string, isloyalty : boolean) {
    const loyaltyDisplay = isloyalty ? ' ⭐ ' : ''
    reviewTotalDisplay!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + loyaltyDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you = {
    userName: 'Bobby',
    isReturning: true,
}


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}

populateUser(you.isReturning, you.userName)
