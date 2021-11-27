import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    title: ['Bulbasaur', 'Charmander ', 'Squirtle', 'Pikachu'],
    tipo: ['Planta', 'Fogo', 'Agua', 'Eletrico'],
    desc: ['Sapo com broto', 'Largatixa de fogo', 'Tartarua', 'Rato eletrico'],
    acao: 'Ações:',
    at1: ['Tackle', 'Scratch', 'Tackle', 'Quick Attack'],
    at2: ['Growl', 'Growl', 'Tail Whip', '	Growl'],
    at3: ['Leech Seed', 'Ember', 'Bubble', 'Thunder Wave'],
    ct: ['green--text', 'red--text', 'blue--text', 'yellow--text']
  },
})

export default store
