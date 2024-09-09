const words = require('./words.json').words;

class Filter {
  constructor() {
    this.words = new Set(words);
    this.regex = this.createRegex();
  }

  createRegex() {
    const wordList = Array.from(this.words).map(word => `\\b${word}\\b`).join('|');
    return new RegExp(wordList, 'gi');
  }

  isProfane(text) {
    return this.regex.test(text);
  }

  censor(text) {
    return text.replace(this.regex, match => '*'.repeat(match.length));
  }

  addWords(...newWords) {
    newWords.forEach(word => this.words.add(word.toLowerCase()));
    this.regex = this.createRegex();
  }

  removeWords(...removeWords) {
    removeWords.forEach(word => this.words.delete(word.toLowerCase()));
    this.regex = this.createRegex();
  }

  clearList() {
    this.words.clear();
    this.regex = this.createRegex();
  }
}

module.exports = Filter;
