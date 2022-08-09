import { LoyaltyUser } from "./enums.js"
import { reviews } from "./index.js"


const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement
const container = document.querySelector('.container') as HTMLDivElement
const button = document.querySelector('button') as HTMLButtonElement



export function showReviewTotal (value : number, reviewer : string, isLoyalty : LoyaltyUser) {
    const loyaltyDisplay = LoyaltyUser.GOLD_USER ? ' ⭐ ' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + '| last reviewed by ' + reviewer + loyaltyDisplay
}

export function populateUser(isReturning : boolean, userName : string ) :void {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(authorityStatus : boolean | Permissions, element : HTMLDivElement, price: number) : void {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

// Get top two reviews
export function getTopTwoReviews(reviews : { 
    name : string; 
    stars : number;
    loyaltyUser : LoyaltyUser
    date : string; 
}[]) : { 
         name: string; 
         stars: number; 
         loyaltyUser : LoyaltyUser
         date: string; 
         }[] 
{
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}

//Show top two reviews 
let count = 0
export function addReviews(array : {
    name : string;
    stars : number;
    loyaltyUser : LoyaltyUser
    date : string;
}[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

