<template>
    <ion-page>
        <div data-pg-name="main-cont" class="main-container d-flex flex-column justify-content-between" style="background-image: url('assets/images/pages/cours_background.jpg');">
            <div class="header vivify driveInTop" data-pg-name="header">
                <img class="header-img" src="assets/images/pages/cours_headss.png"/>
            </div>
            <div data-pg-name="menus" class="menu-container d-flex flex-row flex-wrap vivify driveInBottom">
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_mlg.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_philo.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_hg.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_math.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_pc.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_svt.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_frc.png"/>
                </div>
                <div class="container d-flex flex-column align-items-center menu-bt-container">
                    <img data-pg-name="menuimg" class="menu-img" src="assets/images/pages/bouton_cours_eps.png"/>
                </div>
            </div>
            <div data-pg-name="footer" class="footer d-flex flex-column font-bebase">
                <p>- LES MATIERES -&nbsp;</p>
            </div>
        </div>
    </ion-page>
</template>

<script>
import { IonPage } from '@ionic/vue';
export default {
    components:{
        IonPage
    }
}
</script>

<style scoped>
.main-container {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
}

.header {
    width: 100%;
    position: relative;
    top: -12px;
}

.menu-container {
    position: relative;
    top: -32px;
}

.footer {
    text-align: center;
    color: #ffffff;
    font-size: 25px;
}

.header-img {
    width: 100%;
}

.menu-img {
    width: 100%;
}

.menu-bt-container {
    width: 200px;
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>