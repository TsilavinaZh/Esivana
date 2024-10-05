var assert = require('assert');
var Filter = require('../src/filter');

const regexForAsterixOnly = /^\*+$/; // this indicate that word contain asterix only

describe("Filter", () => {

    it("should censor text", () => {
        let filter = new Filter();
        assert.match(filter.censor("fory"), regexForAsterixOnly);
        assert.match(filter.censor("foribe"), regexForAsterixOnly);
    })

    it("should censor text with same length as profane words", () => {
        let filter = new Filter();
        let wordsLength = {
            "fory": 4, // result should be: ****
            "foribe": 6, // result should be: *****
        }
        for (let word in wordsLength) {
            assert.equal(filter.censor(word).length, wordsLength[word]);
        }
    })

    it("should add word to list", () => {
        let filter = new Filter();
        let notIncludedWord = "foufoune";
        assert.equal(filter.censor(notIncludedWord), notIncludedWord);
        filter.addWords(notIncludedWord);  
        assert.match(filter.censor(notIncludedWord), regexForAsterixOnly);
    })
    
    it("should remove word from list", () => {
        let filter = new Filter();
        let includedWord = "fory";
        assert.match(filter.censor("fory"), regexForAsterixOnly);
        filter.removeWords(includedWord);  
        assert.equal(filter.censor(includedWord), includedWord);
    })
})