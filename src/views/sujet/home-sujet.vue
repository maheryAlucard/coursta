<template>
    <ion-page>
        <div data-pg-name="maincontainer" class="main-cont" style="background-image: url('assets/images/pages/cours_background.jpg');">
            <div data-pg-name="header" class="sujet-head d-flex flex-column align-items-center justify-content-center  vivify driveInTop">
                <img style="width: 100%;" src="assets/images/pages/sujets_head.png"/>
            </div>
            <div data-pg-name="menu" class="vivify driveInBottom">
                <div class="container menu-container-list" data-pg-name="menucont">
                    <div class="container" data-pg-name="headimg">
                        <img src="assets/images/pages/sujets_div_litteraires.png" class="su-menu-style"/>
                    </div>
                    <div class="container menu-list" data-pg-name="menulist">
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                    </div>
                </div>
                <div class="container menu-container-list" data-pg-name="menucont">
                    <div class="container" data-pg-name="headimg">
                        <img class="su-menu-style" src="assets/images/pages/sujets_div_scientifiques.png"/>
                    </div>
                    <div class="container menu-list" data-pg-name="menulist">
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                    </div>
                </div>
                <div class="container menu-container-list" data-pg-name="menucont">
                    <div class="container" data-pg-name="headimg">
                        <img class="su-menu-style" src="assets/images/pages/sujets_div_langues.png"/>
                    </div>
                    <div class="container menu-list" data-pg-name="menulist">
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                        <div class="container d-flex flex-row justify-content-between align-items-center menu-liste-ligne">
                            <div class="flex-row d-flex" style="width: 100%;">
                                <img src="assets/images/pages/arrow.svg" style="width: 20px; height: 30px; margin-right: 10px;"/>
                                <p class="menu-list-text">MALAGASY</p>
                            </div>
                            <p class="menu-list-secondary-text">Paragraph</p>
                        </div>
                    </div>
                </div>
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
.main-cont {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
}

.sujet-head {
    width: 100%;
    position: sticky;
}

.su-menu-style {
    width: 100%;
    height: 40px;
}

.menu-list-text {
    margin-bottom: 0;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
}

.menu-list {
    margin-top: 10px;
}

.menu-list-secondary-text {
    margin-bottom: 0;
    color: #c8c8c8;
}

.menu-liste-ligne {
    margin-top: 10px;
    margin-bottom: 10px;
}

.menu-container-list {
    margin-top: 10px;
    margin-bottom: 16px;
}
</style>