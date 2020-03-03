const orderedCount = text => [...new Set(text)].map(letter => [letter, text.split(letter).length - 1])
