export interface Strategy {
    name?;
    type?;
}

export class NumberBetweenBoundsStrategy implements Strategy {
    constructor(public name: String, public type: String, public lowerBound: number, public upperBound: number ) {
    }
}
export class HasImageStrategy {
    constructor(public name: String, public type: String, public hasImageValue: Boolean) {
    }
}
export class IsInContactStrategy implements Strategy {
    constructor(public name: String, public type: String, public isInContact: Boolean) {}
}
export class IsFavouriteStrategy implements Strategy {
    constructor(public name: String, public type: String, public isFavourite: Boolean) {}
}
