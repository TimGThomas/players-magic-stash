Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"l-modal modal\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("</div>\n<div class=\"modal-cover\"></div>\n\n<div id=\"content\">\n\n  <header id=\"header\">\n    <h1>Magic Stash: Player <a href=\"#\" onclick=\"javascript:window.location.reload()\" class=\"de-em\">Reload</a></h1>\n  </header>\n\n  <div id=\"main\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["character"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                            <tr ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAttackDetails", "", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">  <!-- action showAttackDetails this -->\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "bonus", options) : helperMissing.call(depth0, "modifier", "bonus", options))));
  data.buffer.push("</td>\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "damage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                            </tr>\n                        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n                            <tr>\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "bonus", options) : helperMissing.call(depth0, "modifier", "bonus", options))));
  data.buffer.push("</td>\n                                <td>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "damage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                            </tr>\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"l-card-container tile-flip\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("isEditing:flip")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n    <div class=\"flipper\">\n        <div class=\"l-card front\">\n            <header class=\"card-header\">\n                <h2>\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleProperty", "isEditing", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"de-em\" href=\"#\">Edit</a>\n                </h2>\n                <h3>Level-");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "level", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "race", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "class", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n                <aside class=\"card-subheader\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAddXP", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "xp", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<span class=\"de-em\"> XP</span></span>\n                    <span class=\"secondary\">Level ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "level", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </aside>\n            </header>\n\n            <h4 class=\"card-section\">Basics</h4>\n            <ul class=\"tiles\">\n                <li class=\"tile\">\n                    <span class=\"title\">Initiative</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "initiativeBonus", options) : helperMissing.call(depth0, "modifier", "initiativeBonus", options))));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showHitPoints", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">\n                        <span class=\"title\">Hit Points</span>\n                        <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentHitPoints", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                        <span class=\"secondary\">of ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "hitPoints", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                    </a>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Armor Class</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "armorClass", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Speed</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "speed", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n            </ul>\n\n            <h4 class=\"card-section\">Ability Scores</h4>\n\n            <ul class=\"tiles\">\n                <li class=\"tile\">\n                    <span class=\"title\">Str</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "strengthModifier", options) : helperMissing.call(depth0, "modifier", "strengthModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "strength", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Dex</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "dexterityModifier", options) : helperMissing.call(depth0, "modifier", "dexterityModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dexterity", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Con</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "constitutionModifier", options) : helperMissing.call(depth0, "modifier", "constitutionModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "constitution", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Wis</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "wisdomModifier", options) : helperMissing.call(depth0, "modifier", "wisdomModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "wisdom", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Int</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "intelligenceModifier", options) : helperMissing.call(depth0, "modifier", "intelligenceModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "intelligence", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n                <li class=\"tile\">\n                    <span class=\"title\">Cha</span>\n                    <span class=\"primary\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "charismaModifier", options) : helperMissing.call(depth0, "modifier", "charismaModifier", options))));
  data.buffer.push("</span>\n                    <span class=\"secondary\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "charisma", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                </li>\n            </ul>\n\n            <h4 class=\"card-section\">Attacks</h4>\n\n            <div class=\"l-panel scrollable\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th style=\"width:50%\">Weapon</th>\n                            <th style=\"width:25%\">Bonus</th>\n                            <th style=\"width:25%\">Damage</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack2 = helpers.each.call(depth0, "weaponAttacks", {hash:{
    'itemController': ("attack")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </tbody>\n                    <thead>\n                        <tr>\n                            <th>Spells</th>\n                            <th>Bonus</th>\n                            <th>Damage</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "spellAttacks", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n        <div class=\"l-card back\">\n            <fieldset>\n                <legend>Basics</legend>\n                <p>\n                    <label for=\"name\">Name</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"race\">Race</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("race")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"class\">Class</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("class")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"xp\">XP</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("xp")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"hitPoints\">Hit Points</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("hitPoints")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"armorClass\">Armor Class</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("armorClass")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"initiativeBonus\">Initiative</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("initiativeBonus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"speed\">Speed</label>\n                    ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("speed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </p>\n            </fieldset>\n            <fieldset>\n                <legend>Ability Scores</legend>\n                <p>\n                    <label for=\"strength\">Strength (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "strength", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "strengthModifier", options) : helperMissing.call(depth0, "modifier", "strengthModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("strength"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"dexterity\">Dexterity (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dexterity", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "dexterityModifier", options) : helperMissing.call(depth0, "modifier", "dexterityModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("dexterity"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"constitution\">Constitution (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "constitution", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "constitutionModifier", options) : helperMissing.call(depth0, "modifier", "constitutionModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("constitution"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"wisdom\">Wisdom (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "wisdom", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "wisdomModifier", options) : helperMissing.call(depth0, "modifier", "wisdomModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("wisdom"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"intelligence\">Intelligence (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "intelligence", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "intelligenceModifier", options) : helperMissing.call(depth0, "modifier", "intelligenceModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("intelligence"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p>\n                    <label for=\"charisma\">Charisma (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "charisma", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(", ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "charismaModifier", options) : helperMissing.call(depth0, "modifier", "charismaModifier", options))));
  data.buffer.push(")</label>\n                    ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("charisma"),
    'min': ("1"),
    'max': ("30")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n            </fieldset>\n            <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Save</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"l-card-container l-card\"></div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Character");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "character", options) : helperMissing.call(depth0, "link-to", "character", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["modal-addXP"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2 class=\"card-section\">Experience Points</h2>\n");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("xpModifier")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n<p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "xpModifier", options) : helperMissing.call(depth0, "modifier", "xpModifier", options))));
  data.buffer.push("</p>\n<div class=\"actions\">\n  <a class=\"action btn\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</a>\n  <a class=\"action btn primary\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitAddXP", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">OK</a>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["modal-attackDetails"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2 class=\"card-section\">Attack Details</h2>\n<p>\n  <label>Attack Name (Weapon, Spell, etc.)</label>\n  ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("name")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n<p>\n  <label>Bonus (");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "bonus", options) : helperMissing.call(depth0, "modifier", "bonus", options))));
  data.buffer.push(")</label>\n  ");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("bonus"),
    'min': ("-20"),
    'max': ("20")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</p>\n<p>\n  <label>Damage</label>\n  ");
  hashContexts = {'type': depth0,'value': depth0};
  hashTypes = {'type': "ID",'value': "ID"};
  options = {hash:{
    'type': ("text"),
    'value': ("damage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n<div class=\"actions\">\n  <a class=\"action btn\" href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Close</a>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["modal-hitPoints"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<h2 class=\"card-section\">Hit Points</h2>\n");
  hashContexts = {'valueBinding': depth0,'min': depth0,'max': depth0};
  hashTypes = {'valueBinding': "STRING",'min': "STRING",'max': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RangeField", {hash:{
    'valueBinding': ("hitPointModifier"),
    'min': ("-100"),
    'max': ("100")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<p>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.modifier || depth0.modifier),stack1 ? stack1.call(depth0, "hitPointModifier", options) : helperMissing.call(depth0, "modifier", "hitPointModifier", options))));
  data.buffer.push("</p>\n<div class=\"actions\">\n  <a class=\"action btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">Cancel</a>\n  <a class=\"action btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetHitPoints", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">Reset</a>\n  <a class=\"action btn primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "commitHitPoints", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">OK</a>\n</div>");
  return buffer;
  
});