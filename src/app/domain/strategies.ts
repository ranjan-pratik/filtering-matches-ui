export interface Strategy {
    name?;
    type?;
}

export class NumberBetweenBoundsStrategy implements Strategy {
    name: String = 'NumberBetweenBoundsStrategy';
    type: String = 'numberBetweenBounds';
    constructor(public lowerBound: number, public upperBound: number) {}
}
export class StringIsNotNullStrategy {
    name: String = 'StringIsNotNullStrategy';
    type: String = 'stringIsNotNull';
    constructor() {}
}
export class PositiveNumberStrategy implements Strategy {
    name: String = 'PositiveNumberStrategy';
    type: String = 'positiveNumber';
    constructor() {}
}
export class NumberEqualToStrategy implements Strategy {
    name: String = 'NumberEqualToStrategy';
    type: String = 'numberEqualTo';
    constructor(public value: number) {}
}
export class IsTrueOrFalseStrategy implements Strategy {
    name: String = 'IsTrueOrFalseStrategy';
    type: String = 'isTrueOrFalse';
    constructor(public value: Boolean) {}
}
export class DistanceWithinRangeStrategy implements Strategy {
    name: String = 'DistanceWithinRangeStrategy';
    type: String = 'distanceWithInRange';
    constructor(public thisLat: number, public thisLon: number, public lowerBound: number, public upperBound: number ) {}
}
