<template>
  <div class="home">
    <v-container class="grey lighten-5">
        <v-row>
          <v-col v-for="(t, i) in cardTitle" :key="i" cols="12" sm="4">
            <br>
            <card :titulo=t :acao=cardAc :tipo=cardT[i] :desc=cardD[i] :at1=cardAt1[i] :at2=cardAt2[i] :at3=cardAt3[i] :ct=cardCt[i] />
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',

  computed: {
    cardTitle(){
      return this.$store.state.title
    },
    cardAc(){
      return this.$store.state.acao
    },
    cardT(){
      return this.$store.state.tipo
    },
    cardD(){
      return this.$store.state.desc
    },
    cardAt1(){
      return this.$store.state.at1
    },
    cardAt2(){
      return this.$store.state.at2
    },
    cardAt3(){
      return this.$store.state.at3
    },
    cardCt(){
      return this.$store.state.ct
    }
  },

  components: {
    Card
  }
}
</script>
