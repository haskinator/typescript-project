import { LoyaltyUser, Permissions } from './enums'
import { Price, Country } from './types';


export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string
}

export interface You {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    permissions: Permissions,
    age: number;
    stayedAt: string[]
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contact: (string | number)[];
    isAvailable: boolean;
}