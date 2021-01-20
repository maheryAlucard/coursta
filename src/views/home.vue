<template>
    <ion-page>
       <div data-pg-name="maincontainer" class="d-flex flex-column main-container justify-content-between" style="width: 100%;
        height: 100vh;
        background-image: url('assets/images/homeBckground.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;" data-pg-collapsed>
        <div data-pg-name="head" style="background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;" data-pg-collapsed>
            <div class="container main-head" data-pg-name="page-head">
                <p style="margin-bottom: 0;">coursta.mg</p>
            </div>
        </div>
        <div data-pg-name="center" data-pg-collapsed>
            <div class="container links-container d-flex flex-row justify-content-center" data-pg-name="links" data-pg-collapsed>
                <a href="" data-pg-name="fblink" data-pg-collapsed>
                    <div class="container links-img-container" data-pg-name="facebook" style="background-image: url('assets/images/bouton_fb.png');"></div>
                </a>
                <a href="" data-pg-name="maillink" data-pg-collapsed>
                    <div class="container links-img-container" data-pg-name="facebook" style="background-image: url('assets/images/bouton_mail.png');"></div>
                </a>
                <a href="" data-pg-name="weblink" data-pg-collapsed>
                    <div class="container links-img-container" data-pg-name="facebook" style="background-image: url('assets/images/bouton_web.png');"></div>
                </a>
            </div>
            <div class="container logo-main-container-home" data-pg-name="logo" data-pg-collapsed>
                <div class="container img-logo-container  vivify spinIn" data-pg-name="imgloco">
                    <img src="assets/images/logo.png" alt="" class="logo-img">
                </div>
            </div>
            <div class="container buttons-container" data-pg-name="buttons">
                <div class="container bt-container d-flex flex-column align-items-center vivify popIn" data-pg-name="btcontainer">
                    <button type="button" @click="() => router.push('/Tabes')" class="btn home-bt">Literaire</button>
                </div>
            </div>
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
import { useRouter } from 'vue-router';

export default {
    components:{
        IonPage
    },
    setup(){
        const router = useRouter();
        return { router };
    }
}
</script>
<style scoped>
    .logo-img{
        width: 100%;
        height: auto;
    }
</style>