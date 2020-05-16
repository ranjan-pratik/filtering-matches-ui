import {NumberBetweenBoundsStrategy, Strategy} from './strategies';

export interface Filter {
    type?;
    strategy: Strategy;
}

export class AgeFilter implements Filter {
    type: String = 'age';
    constructor(public strategy: Strategy) {}
}
export class HeightFilter implements Filter {
    type: String = 'height';
    constructor(public strategy: Strategy) {}
}
export class CompatibilityFilter implements Filter {
    type: String = 'compatibility';
    constructor(public strategy: Strategy) {}
}
export class HasImageFilter implements Filter {
    type: String = 'hasImage';
    constructor(public strategy: Strategy) {}
}
export class IsInContactFilter implements Filter {
    type: String = 'isInContact';
    constructor(public strategy: Strategy) {}
}
export class IsFavouriteFilter implements Filter {
    type: String = 'isFavourite';
    constructor(public strategy: Strategy) {}
}
export class DistanceInKmFilter implements Filter {
    type: String = 'distanceInKm';
    constructor(public strategy: Strategy) {}
}
