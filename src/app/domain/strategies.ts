export interface Strategy {
    name?;
    type?;
}

export class NumberBetweenBoundsStrategy implements Strategy {
    name: String = 'NumberBetweenBoundsStrategy';
    type: String = 'numberBetweenBounds';
    constructor(public lowerBound: number, public upperBound: number ) {}
}
export class StringIsNotNullStrategy {
    name: String = 'StringIsNotNullStrategy';
    type: String = 'isNotNull';
    constructor(public hasImageValue: Boolean) {}
}
export class PositiveNumberStrategy implements Strategy {
    name: String = 'PositiveNumberStrategy';
    type: String = 'positiveNumber';
    constructor(public isInContact: Boolean) {}
}
export class IsTrueStrategy implements Strategy {
    name: String = 'IsTrueStrategy';
    type: String = 'isTrue';
    constructor(public isFavourite: Boolean) {}
}
export class IsFalseStrategy implements Strategy {
    name: String = 'IsFalseStrategy';
    type: String = 'isFalse';
    constructor(public isFavourite: Boolean) {}
}
