

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')


export function showReviewTotal (value : number, reviewer : string, isloyalty : boolean) {
    const loyaltyDisplay = isloyalty ? ' ⭐ ' : ''
    reviewTotalDisplay!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + loyaltyDisplay
}

export function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}