<template>
    <div class="champions"
         @drop="OnDrop($event)" @dragover.prevent @dragenter.prevent
    >
        <div v-for="(champion, index) in champions" :key="champion.name" :ref="champion.name"
             class="float-start tft__margin-5"
             draggable="true"
             @dragstart="OnDragStart($event, code, index)"
        >
            <img :src="require(`@/assets/TFT/champions/` + champion.championId + `.png`)" class="champions__img champions__img__border__gold"/>
        </div>
    </div>
</template>

<script>
import Champions from "../../Utils/champions";

export default {
    data() {
        return {
            champions: null,
            code: Champions.Code(),
        };
    },
    props: {
        OnDragStart: {
            type: Function,
        },
        OnDrop: {
            type: Function,
        },
    },
    created() {
        this.champions = Champions.GetChampions();
    }
}
</script>