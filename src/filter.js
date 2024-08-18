const words = require('./words.json').words;

class Filter {
  constructor() {
    this.words = new Set(words);
  }

  isProfane(text) {
    const lowerCaseText = text.toLowerCase();
    return Array.from(this.words).some(word => lowerCaseText.includes(word));
  }

  censor(text) {
    const lowerCaseText = text.toLowerCase();
    return lowerCaseText.split(' ').map(word => {
      return this.words.has(word) ? '*'.repeat(word.length) : word;
    }).join(' ');
  }

  addWords(...newWords) {
    newWords.forEach(word => this.words.add(word.toLowerCase()));
  }

  removeWords(...removeWords) {
    removeWords.forEach(word => this.words.delete(word.toLowerCase()));
  }

  clearList() {
    this.words.clear();
  }
}

module.exports = Filter;