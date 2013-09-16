defaultCharacter =
  name: 'Aramil'
  race: 'Wood Elf'
  class: 'Ranger'
  xp: 0
  currentHitPoints: 20
  hitPoints: 20
  armorClass: 10
  initiativeBonus: 0
  strength: 10
  dexterity: 10
  constitution: 10
  wisdom: 10
  intelligence: 10
  charisma: 10

levels = [
  0
  250
  950
  2250
  4750
  9500
  16000
  25000
  38000
  56000
  77000
  96000
  120000
  150000
  190000
  230000
  280000
  330000
  390000
  460000
]

Character = Ember.Object.extend
  level: (->
    actLevel = 0
    levels.forEach (level) =>
      if @get("xp") >= level
        actLevel = levels.indexOf(level) + 1
        return
    actLevel
    ).property 'xp'
  # Ability Score Modifiers
  strengthModifier: (-> Character.getModifier @get('strength')).property 'strength'
  constitutionModifier: (-> Character.getModifier @get('constitution')).property 'constitution'
  dexterityModifier: (-> Character.getModifier @get('dexterity')).property 'dexterity'
  wisdomModifier: (-> Character.getModifier @get('wisdom')).property 'wisdom'
  intelligenceModifier: (-> Character.getModifier @get('intelligence')).property 'intelligence'
  charismaModifier: (-> Character.getModifier @get('charisma')).property 'charisma'

Character::toJSON = ->
  ret = []
  for key of this
    if @hasOwnProperty(key)
      v = this[key]
      continue  if v is "toString"
      # ignore useless items
      continue  if Ember.typeOf(v) is "function"
      ret.push key
  @getProperties ret

Character::save = ->
  localStorage.setItem 'character', JSON.stringify(@toJSON())

Character.reopenClass
  get: ->
    existingCharacter = localStorage.getItem 'character'
    if existingCharacter
      # Add any new properties to saved Characters.
      return Character.create Object.deepExtend defaultCharacter, JSON.parse existingCharacter
    else
      c = Character.create defaultCharacter
      c.save()
      c
  getModifier: (score) ->
    Math.floor((score - 10) / 2)

`export default Character`