export default function sortCharacters(array) {
    array.sort((a, b) => b.health - a.health);
    
    return array;
  }
