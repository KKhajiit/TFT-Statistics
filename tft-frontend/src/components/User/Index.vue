<template>
    <div class="container">
        <div class="row bg__profile">
            <div class="col-2">
                <img src="https://e7.pngegg.com/pngimages/752/220/png-clipart-league-of-legends-computer-icons-riot-games-league-of-legends-game-logo-thumbnail.png" class="img-fluid img__profile" style="width: 106px; height: 106px;"/>
            </div>
            <div class="col-10">
                <div class="row">
                    <h5 style="color: white;">우왕아안녀엉hihi <span class="badge bg-secondary">kr</span></h5>
                </div>
                <div class="row">
                    <div class="col-2">
                        <button class="btn btn-info">새로고침</button>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-info">즐겨찾기</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="max-height: 500px;">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row g-4">
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'승리'" v-bind:right-label="'11'" v-bind:now-value="50" v-bind:bottom-label="'11'"></ProgressBar>
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'승률'" v-bind:right-label="'12.8%'" v-bind:now-value="20" v-bind:bottom-label="'0.2'"></ProgressBar>
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'TOP 4'" v-bind:right-label="'144'" v-bind:now-value="30" v-bind:bottom-label="'0.11'"></ProgressBar>
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'TOP 4 비율'" v-bind:right-label="'11%'" v-bind:now-value="15" v-bind:bottom-label="'11'"></ProgressBar>
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'게임 수'" v-bind:right-label="'11123'" v-bind:now-value="90" v-bind:bottom-label="'11'"></ProgressBar>
                            <ProgressBar v-bind:div-class="'col-6'" v-bind:label="'평균 등수'" v-bind:right-label="'3.11'" v-bind:now-value="6" v-bind:bottom-label="'11'"></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <TierChart
                    :chart-data="datacollection"
                    :styles="myStyles"
                />
            </div>
        </div>
        <!-- match list -->
        <div class="card" style="border-left: 6px solid red;">
            <div class="card-body">
                <div class="row vertical-align">
                    <div class="col-2" style="padding-left: 30px;">
                        <div class="row">#5</div>
                        <div class="row">랭크</div>
                        <div class="row">33:43</div>
                        <div class="row">17시간 전</div>
                    </div>
                    <div class="col-6">
                        <div class="row gy-2">
                            <div class="col-12">
                                <div class="float-start tft__margin-10">
                                    <div class="d-flex justify-content-center">
                                        <i class="fas fa-star small"></i>
                                        <i class="fas fa-star small"></i>
                                        <i class="fas fa-star small"></i>
                                    </div>
                                    <div class="justify-content-center">
                                        <img src="@/assets/TFT/champions/TFT5_Gragas.png" class="img-fluid champions__img"/>
                                    </div>
                                </div>
                                <div class="float-start tft__margin-10">
                                    <div class="d-flex justify-content-center">
                                        <i class="fas fa-star small"></i>
                                        <i class="fas fa-star small"></i>
                                    </div>
                                    <div>
                                        <img src="@/assets/TFT/champions/TFT5_Aatrox.png" class="img-fluid champions__img"/>
                                    </div>
                                </div>
                                <div class="float-start tft__margin-10">
                                    <div class="d-flex justify-content-center">
                                        <i class="fas fa-star small"></i>
                                    </div>
                                    <div>
                                        <img src="@/assets/TFT/champions/TFT5_Aatrox.png" class="img-fluid champions__img"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trait__bg trait__img__bg__bronze trait__img__bg__24 tft__margin">
                                    <img src="@/assets/TFT/traits/Set5_Assassin.svg"/>
                                </div>
                                <div class="trait__bg trait__img__bg__platinum trait__img__bg__24 tft__margin">
                                    <img src="@/assets/TFT/traits/Set5_Assassin.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">하얀해달</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">bluefeather</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">탑원거리챔박멸</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">하얀해달</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">wwwwwwvvwwvw</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">lIllllIIIllIIII</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">숨질뻔했어요</a>
                            </div>
                            <div class="col-6">
                                <i class="fas fa-user"></i>&nbsp;
                                <a href="javascript:void(0);" class="user__link">weeing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TierChart from './TierChart.vue';
import ProgressBar from "../common/ProgressBar";

export default {
    components: {
        TierChart,
        ProgressBar
    },
    data() {
        return {
            datacollection: null,
            myStyles: {
                height: '250px',
                width: '100%',
                position: 'relative',
            },
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                        // label: 'Data One',
                        backgroundColor: '#f87979',
                        fill: false,
                        tension: 0.1,
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                    }
                ]
            };
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },
        GetBG() {
            return 1;
            // return require('src/assets/TFT/traits/bg_bronze.png');
        },
    },
}
</script>