Character = Ember.Object.extend
  strengthModifier: (-> Character.getModifier @get('strength')).property 'strength'
  constitutionModifier: (-> Character.getModifier @get('constitution')).property 'constitution'
  dexterityModifier: (-> Character.getModifier @get('dexterity')).property 'dexterity'
  wisdomModifier: (-> Character.getModifier @get('wisdom')).property 'wisdom'
  intelligenceModifier: (-> Character.getModifier @get('intelligence')).property 'intelligence'
  charismaModifier: (-> Character.getModifier @get('charisma')).property 'charisma'

Character.reopenClass
  get: ->
    Character.create
      name: 'Aramil'
      race: 'Wood Elf'
      class: 'Ranger'
      level: 1
      strength: 10
      dexterity: 10
      constitution: 10
      wisdom: 10
      intelligence: 10
      charisma: 10
  getModifier: (score) ->
    Math.floor((score - 10) / 2)

`export default Character`