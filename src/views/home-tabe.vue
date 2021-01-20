<template>
    <ion-page>
        <div data-pg-name="maincontainer" class="d-flex flex-column main-container justify-content-between" style="width: 100%;height: 100vh;background-image: url('assets/images/choiceBackground.jpg');
        background-repeat: no-repeat;background-position: center center;background-attachment: fixed;background-size: cover;" data-pg-collapsed>
        
        <div data-pg-name="head" style="background-repeat: no-repeat;background-position: center center;background-attachment: fixed;background-size: cover;" data-pg-collapsed>
            <div class="container main-head" data-pg-name="page-head">
                <p style="margin-bottom: 0;">coursta.mg</p>
            </div>
        </div>
        <div data-pg-name="center" data-pg-collapsed>
            <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                    <div @click="() => router.push('/cours')" class="container logo-main-container vivify pullUp" data-pg-name="logo" data-pg-collapsed>
                        <div class="container img-logo-container" data-pg-name="imgloco">
                            <img src="assets/images/cours.png" alt="" class="logo-img">
                        </div>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div @click="() => router.push('/sujet')" class="container logo-main-container vivify pullUp" data-pg-name="logo" data-pg-collapsed>
                        <div class="container img-logo-container" data-pg-name="imgloco">
                            <img src="assets/images/sujet.png" alt="" class="logo-img">
                        </div>
                    </div>
                </ion-slide>
            </ion-slides>
        </div>
        <div data-pg-name="footer" data-pg-collapsed>
            <div class="container foot-container">
                <p style="bottom: 0; margin-bottom: -3px;">@SteveAndfriatsaina | All right reserved</p>
                <p style="bottom: 0;">COURSTA V3.0 | SINCE 2K18 | RELEASE 2K21</p>
            </div>
        </div>
    </div>
    </ion-page>
</template>

<script>
import { IonPage } from '@ionic/vue';
import { IonSlides, IonSlide } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
    components:{
        IonPage, IonSlides, IonSlide
    },
    data:function(){
        return{

        }
    },
    setup(){
        const slideOpts = {
        initialSlide: 0,
        speed: 400
        };
        const router = useRouter();
        return { slideOpts, router }
    }
}
</script>