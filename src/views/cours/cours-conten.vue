<template>
    <ion-page>
        <Malagasy v-if="page == ':mlg'"></Malagasy>
        <Eps v-if="page == ':eps'"></Eps>
        <Francais v-if="page == ':frc'"></Francais>
        <HistoGeo v-if="page == ':hg'"></HistoGeo>
        <Mathc v-if="page == ':math'"></Mathc>
        <Philo v-if="page == ':philo'"></Philo>
        <Pc v-if="page == ':pc'"></Pc>
        <Svt v-if="page == ':svt'"></Svt>
    </ion-page>
</template>

<script>
import { IonPage } from '@ionic/vue';
import Malagasy from '../../components/cours-component/malagasy.vue'
import Eps from '../../components/cours-component/eps.vue'
import Francais from '../../components/cours-component/francais.vue'
import HistoGeo from '../../components/cours-component/histo-geo.vue'
import Mathc from '../../components/cours-component/math.vue'
import Philo from '../../components/cours-component/philo.vue'
import Pc from '../../components/cours-component/phisique-chimie.vue'
import Svt from '../../components/cours-component/svt.vue'

export default {
    props:['page'],
    components:{
        IonPage, Malagasy, Eps, Francais, HistoGeo, Mathc, Philo, Pc, Svt
    },
    mounted:function(){
        console.log("curentPage ===> ", this.page);
    },
    data:function(){
        return{
            
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>

</style>