import { expect } from 'chai';
const rp = require('request-promise');
const sinon = require('sinon');
const { search } = require("../../utilities/google");

const RESULTS_LIMIT = 40;

describe('google', () => {
    const query = 'Dune';
     beforeAll(() => {
        sinon.stub(rp, 'get').resolves({items: [], count: 0})
    });
    afterEach(() => {
        rp.get.reset()
    });
    afterAll(() => {
        rp.get.restore()
    });
    describe('User sends a new query', () => {
        it('should make a request to the api with the correct details', async () => {
            await search(query);
            expect(rp.get.getCall(0).args[0].qs).to.deep.equal({ maxResults: RESULTS_LIMIT, startIndex: 0});
        });
        describe('User calls function for the next page of results', () => {
            it('should make a request to the api using the correct details', async () => {
                await search(query, 1);
                expect(rp.get.getCall(0).args[0].qs).to.deep.equal({ maxResults: RESULTS_LIMIT, startIndex: RESULTS_LIMIT});
            });
            describe('google api returns 200 response', () => {
                beforeEach(() => {
                    rp.get.resolves({items: [{title: 'title'}], totalItems: 1 });
                });
                it('should return the correct results', async () => {
                    const results = await search(query);
                    expect(results.items).to.be.deep.equal([{title: 'title'}]);
                    expect(results.totalItems).to.equal(1);
                });
            });
            describe('google api throws and error', () => {
                beforeEach(() => {
                    rp.get.throws({message: 'Sample Error'});
                });
                it('should return an empty array of results', async () => {
                    const results = await await search(query);
                    expect(results.items).to.be.deep.equal([]);
                });
            });
        });
    });
})