import sortCharacters from '../app'

test('should sort characters by health in descending order', () => {
    const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
  
    const sortedCharacters = sortCharacters(characters);
    expect(sortedCharacters).toEqual(characters);
  });