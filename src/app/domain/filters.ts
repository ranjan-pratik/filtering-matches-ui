import {NumberBetweenBoundsStrategy, Strategy} from './strategies';

export interface Filter {
    field?;
    strategy: Strategy;
}

export class AgeFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class HeightFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class CompatibilityFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class DistanceRangeFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class HasImageFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class IsInContactFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class IsFavouriteFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
export class DistanceInKmFilter implements Filter {
    constructor(public field: String, public strategy: Strategy) {}
}
