Character = Ember.Object.extend
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
      return Character.create JSON.parse existingCharacter
    else
      c = Character.create
        name: 'Aramil'
        race: 'Wood Elf'
        class: 'Ranger'
        level: 1
        currentHitPoints: 20
        hitPoints: 20
        armorClass: 10
        # initiativeBonus
        strength: 10
        dexterity: 10
        constitution: 10
        wisdom: 10
        intelligence: 10
        charisma: 10
      c.save()
      c
  getModifier: (score) ->
    Math.floor((score - 10) / 2)

`export default Character`