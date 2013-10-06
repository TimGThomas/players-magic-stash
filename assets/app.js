define("appkit/app",
  ["resolver","appkit/router"],
  function(Resolver, router) {
    "use strict";

    Object.deepExtend = function(destination, source) {
      for (var property in source) {
        if (source[property] && source[property].constructor &&
         source[property].constructor === Object) {
          destination[property] = destination[property] || {};
          Object.deepExtend(destination[property], source[property]);
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    };

    var App = Ember.Application.create({
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver,
      Router: Ember.Router.extend({
        router: router
      })
    });

    App.RangeField = Ember.TextField.extend({
      classNames: 'scrollable',
      type: 'range',
      attributeBindings: ['min', 'max', 'step']
    });

    App.Jsonable = Ember.Mixin.create({
      excludedJsonProperties: [],
      getJson: function() {
          var v, json = {};
          for (var key in this) {
              if (this.hasOwnProperty(key) && this.excludedJsonProperties.indexOf(key) === -1) {
                  v = this[key];
                  if (v === 'toString') {
                      continue;
                  } 
                  if (Ember.typeOf(v) === 'function') {
                      continue;
                  }
                  if (App.Jsonable.detect(v))
                      v = v.getJson();
                  json[key] = v;
              }
          }
          return json;
      }
    });

    App.computed = {};
    App.computed.modifierFor = function(dependency) {
      return Ember.computed(dependency, function() {
        return Math.floor((this.get(dependency) - 10) / 2);
      });
    };


    return App;
  });
define("appkit/controllers/attack",
  [],
  function() {
    "use strict";
    var AttackController;

    AttackController = Ember.ObjectController.extend({
      actions: {
        commitDetails: function() {
          console.debug(this.get('model').name);
          return this.send('closeModal');
        }
      }
    });


    return AttackController;
  });
define("appkit/controllers/character",
  ["appkit/models/attack"],
  function(Attack) {
    "use strict";
    var CharacterController;

    CharacterController = Ember.ObjectController.extend({
      actions: {
        save: function() {
          this.get('model').save();
          return this.toggleProperty('isEditing');
        },
        commitHitPoints: function() {
          var model;
          model = this.get('model');
          model.set('currentHitPoints', model.get('currentHitPoints') + (+this.get('hitPointModifier')));
          this.set('hitPointModifier', 0);
          this.get('target').send('closeModal');
          return model.save();
        },
        resetHP: function() {
          return this.get('model').set('currentHitPoints', this.get('model').get('hitPoints'));
        },
        commitAddXP: function() {
          var model;
          model = this.get('model');
          model.set('xp', +model.get('xp') + (+this.get('xpModifier')));
          this.set('xpModifier', 0);
          this.get('target').send('closeModal');
          return model.save();
        },
        clearModalValues: function() {
          return this.set('hitPointModifier', 0);
        }
      },
      isEditing: false,
      hitPointModifier: 0,
      xpModifier: 0
    });


    return CharacterController;
  });
define("appkit/helpers/modifier",
  [],
  function() {
    "use strict";
    Ember.Handlebars.registerBoundHelper('modifier', function(value) {
      if (+value >= 0) {
        return "+" + value;
      }
      return value;
    });

  });
define("appkit/models/attack",
  [],
  function() {
    "use strict";
    var Attack;

    Attack = Ember.Object.extend();

    Attack.reopenClass({
      get: function() {
        return [
          {
            name: 'Short Sword',
            bonus: 2,
            damage: '1d6',
            type: 'weapon'
          }, {
            name: 'Longbow',
            bonus: 4,
            damage: '1d8',
            type: 'weapon'
          }, {
            name: 'Fireball',
            bonus: 1,
            damage: '2d6',
            type: 'spell'
          }
        ];
      }
    });


    return Attack;
  });
define("appkit/models/character",
  ["appkit/app","appkit/models/attack"],
  function(App, Attack) {
    "use strict";
    var Character, defaultCharacter, levels;

    defaultCharacter = {
      name: 'Aramil',
      race: 'Wood Elf',
      "class": 'Ranger',
      xp: 0,
      currentHitPoints: 20,
      hitPoints: 20,
      armorClass: 10,
      initiativeBonus: 0,
      speed: 30,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      wisdom: 10,
      intelligence: 10,
      charisma: 10
    };

    levels = [0, 250, 950, 2250, 4750, 9500, 16000, 25000, 38000, 56000, 77000, 96000, 120000, 150000, 190000, 230000, 280000, 330000, 390000, 460000];

    Character = Ember.Object.extend(App.Jsonable, {
      excludedJsonProperties: ['level', 'strengthModifier', 'constitutionModifier', 'dexterityModifier', 'wisdomModifier', 'intelligenceModifier', 'charismaModifier', 'attacks', 'weaponAttacks', 'spellAttacks'],
      level: (function() {
        var actLevel,
          _this = this;
        actLevel = 0;
        levels.forEach(function(level) {
          if (_this.get('xp') >= level) {
            actLevel = levels.indexOf(level) + 1;
          }
        });
        return actLevel;
      }).property('xp'),
      strengthModifier: App.computed.modifierFor('strength'),
      constitutionModifier: App.computed.modifierFor('constitution'),
      dexterityModifier: App.computed.modifierFor('dexterity'),
      wisdomModifier: App.computed.modifierFor('wisdom'),
      intelligenceModifier: App.computed.modifierFor('intelligence'),
      charismaModifier: App.computed.modifierFor('charisma'),
      weaponAttacks: (function() {
        return this.get('attacks').filterProperty('type', 'weapon');
      }).property('attacks'),
      spellAttacks: (function() {
        return this.get('attacks').filterProperty('type', 'spell');
      }).property('attacks')
    });

    Character.prototype.save = function() {
      return localStorage.setItem('character', JSON.stringify(this.getJson()));
    };

    Character.reopenClass({
      get: function() {
        var c, existingCharacter;
        existingCharacter = localStorage.getItem('character');
        if (existingCharacter) {
          c = Character.create(Object.deepExtend(defaultCharacter, JSON.parse(existingCharacter)));
        } else {
          c = Character.create(defaultCharacter);
          c.save();
        }
        c.set('attacks', Attack.get());
        return c;
      }
    });


    return Character;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var router;

    router = Ember.Router.map(function() {
      return this.resource('character');
    });


    return router;
  });
define("appkit/routes/character",
  ["appkit/models/character","appkit/models/attack","appkit/helpers/modifier"],
  function(Character, Attack, ModifierHelper) {
    "use strict";
    var CharacterRoute;

    CharacterRoute = Ember.Route.extend({
      model: function() {
        return Character.get();
      },
      actions: {
        showHitPoints: function() {
          return this.showModal('modal-hitPoints');
        },
        resetHitPoints: function() {
          this.get('controller').send('resetHP');
          return this.send('closeModal');
        },
        showAddXP: function() {
          return this.showModal('modal-addXP');
        },
        showAttackDetails: function(model) {
          return this.showModal('modal-attackDetails', model, 'attack');
        },
        closeModal: function() {
          var _this = this;
          setTimeout((function() {
            _this.disconnectOutlet({
              outlet: 'modal',
              parentView: 'application'
            });
            return _this.get('controller').send('clearModalValues');
          }), 500);
          return $('.modal').removeClass('modal-show');
        }
      }
    });

    CharacterRoute.prototype.showModal = function(view, model, controller) {
      var renderOptions;
      if (model) {
        this.controllerFor('attack').set('content', model);
      }
      renderOptions = {
        into: 'application',
        outlet: 'modal'
      };
      if (controller) {
        renderOptions.controller = controller;
      }
      this.render(view, renderOptions);
      return $('.modal').addClass('modal-show');
    };


    return CharacterRoute;
  });
define("appkit/routes/index",
  [],
  function() {
    "use strict";
    var IndexRoute;

    IndexRoute = Ember.Route.extend({
      model: function() {
        return ['red', 'yellow', 'blue'];
      }
    });


    return IndexRoute;
  });
//@ sourceMappingURL=app.js.map