<template>
  <ion-page>
    <Home></Home>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue';
import Home from './home.vue';

export default {
  name: 'Pages',
  components: { IonPage , Home},
  methods:{
  }
}
</script>