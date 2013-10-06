define("appkit/tests/acceptance/index_test",
  ["appkit/routes/index","appkit/app"],
  function(Index, App) {
    "use strict";

    module("Acceptances - Index", {
      setup: function(){
        App.reset();
      }
    });

    test("index renders", function(){
      expect(2);

      visit('/').then(function(){
        ok(exists("h1:contains('Magic Stash: Player')"));
        ok(exists('a:contains("Character")'));
      });
    });

  });
define("appkit/tests/unit/models/character_level_test",
  ["appkit/models/character"],
  function(Character) {
    "use strict";

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
  });
define("appkit/tests/unit/routes/index_test",
  ["appkit/routes/index","appkit/app"],
  function(Index, App) {
    "use strict";

    var route;

    module("Unit - IndexRoute", {
      setup: function(){
        route = App.__container__.lookup('route:index');
      }
    });

    test("it exists", function(){
      ok(route);
      ok(route instanceof Ember.Route);
    });

    test("#model", function(){
      deepEqual(route.model(), ['red', 'yellow', 'blue']);
    });

  });
//@ sourceMappingURL=tests.js.map