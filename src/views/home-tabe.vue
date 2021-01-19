<template>
    <ion-page>
        <div data-pg-name="maincontainer" class="d-flex flex-column main-container justify-content-between" style="width: 100%;
        height: 100vh;
        background-image: url('assets/images/choiceBackground.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;" data-pg-collapsed>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            ...
        </swiper>
        <div data-pg-name="head" style="background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;" data-pg-collapsed>
            <div class="container main-head" data-pg-name="page-head">
                <p style="margin-bottom: 0;">coursta.mg</p>
            </div>
        </div>
        <div data-pg-name="center" data-pg-collapsed>
            <div class="container logo-main-container" data-pg-name="logo" data-pg-collapsed>
                <div class="container img-logo-container" data-pg-name="imgloco">
                    <img src="assets/images/cours.png" alt="" class="logo-img">
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
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components:{
        IonPage, Swiper, SwiperSlide
    }
}
</script>