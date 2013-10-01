import Character from 'appkit/models/character';

var character;

var xpLevelCombinations = {
  '0':        1,
  '250':      2,
  '950':      3,
  '2250':    4,
  '4750':    5,
  '9500':    6,
  '16000':   7,
  '25000':   8,
  '38000':   9,
  '56000':  10,
  '77000':  11,
  '96000':  12,
  '120000': 13,
  '150000': 14,
  '190000': 15,
  '230000': 16,
  '280000': 17,
  '330000': 18,
  '390000': 19,
  '460000': 20
};

module('Unit - Character', {
  setup: function() {
    character = Character.create();
  }
});

test('Should calculate level based on XP', function() {
  Object.keys(xpLevelCombinations).forEach(function(key) {
    var xp = +key,
        expectedLevel = xpLevelCombinations[key],
        actualLevel;
    character.set('xp', xp);
    actualLevel = character.get('level');
    equal(actualLevel, expectedLevel, 'A character with ' + xp + ' XP should be level ' + expectedLevel + ' (was ' + actualLevel + ').');
  });
});