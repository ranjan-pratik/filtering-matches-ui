import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MatchService} from './matchservice';

describe('MatchService', () => {
    let httpTestingController: HttpTestingController;
    let service: MatchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MatchService],
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(MatchService);
    });
    afterEach(() => {
        httpTestingController.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    describe('#getMatches()', () => {
        it('returned Observable should match the right data', () => {
            const mockMatches = [
                {
                    match_id: 'Some Id',
                    display_name: 'Some Name'
                },
                {
                    match_id: 'Some other Id',
                    display_name: 'Some other Name'
                }
                ];

            service.getMatches()
                .then(() => {
                    expect(mockMatches[0].match_id).toEqual('Some Id');
                    expect(mockMatches[0].display_name).toEqual('Some Name');
                    expect(mockMatches[1].match_id).toEqual('Some other Id');
                    expect(mockMatches[1].display_name).toEqual('Some other Name');
                });

            const req = httpTestingController.expectOne(
                'http://localhost:8081/MatchFilter/filters/allMatches'
            );

            req.flush(mockMatches);
        });
    });
    describe('#getFilteredMatches()', () => {
        it('returned Observable should match the right data', () => {
            const mockFilteredMatches = [
                {
                    match_id: 'Some Filtered Id',
                    display_name: 'Some Filtered Name'
                },
                {
                    match_id: 'Some other Filtered Id',
                    display_name: 'Some other Filtered Name'
                }
            ];

            const mockFilters = [
                {
                    'strategy': {
                        'lowerBound': 43,
                        'upperBound': 95,
                        'name': 'NumberBetweenBoundsStrategy',
                        'type': 'numberBetweenBounds'
                    },
                    'type': 'age'
                },
                {
                    'strategy': {
                        'lowerBound': 148,
                        'upperBound': 210,
                        'name': 'NumberBetweenBoundsStrategy',
                        'type': 'numberBetweenBounds'
                    },
                    'type': 'height'
                }
            ];

            service.getFilteredMatches(mockFilters)
                .then(() => {
                    expect(mockFilteredMatches[0].match_id).toEqual('Some Filtered Id');
                    expect(mockFilteredMatches[0].display_name).toEqual('Some Filtered Name');
                    expect(mockFilteredMatches[1].match_id).toEqual('Some other Filtered Id');
                    expect(mockFilteredMatches[1].display_name).toEqual('Some other Filtered Name');
                });

            const req = httpTestingController.expectOne(
                'http://localhost:8081/MatchFilter/filters/filteredMatches'
            );

            req.flush(mockFilteredMatches);
        });
    });
});
