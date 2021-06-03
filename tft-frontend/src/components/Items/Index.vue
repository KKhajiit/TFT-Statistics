<template>
    <div class="items"
         @drop="OnDrop($event)" @dragover.prevent @dragenter.prevent
    >
        <div v-for="item in CompleteItem" :key="item.name" :ref="item.name"
             class="float-start tft__margin-5"
             draggable="true"
             @dragstart="OnDragStart($event, code, item.id)"
        >
            <img :src="require(`@/assets/TFT/items/` + GetName(item.id) + `.png`)" class="champions__img" ref="child"/>
            <!--            <img src="@/assets/TFT/champions/TFT5_Aatrox.png"/>-->
        </div>
    </div>
</template>

<script>
import items from '../../Utils/items.js';
export default {
    props: {
        OnDragStart: {
            type: Function,
        },
        OnDrop: {
            type: Function,
        },
    },
    data() {
        return {
            items: null,
            code: items.Code(),
        };
    },
    created() {
        this.items = items.GetItems();
    },
    methods: {
        GetName(name) {
            name = name.toString();
            if (name.length === 1) return `0${name}`;
            return name;
        },
    },
    computed: {
        CompleteItem() {
            // return this.items;
            return this.items.filter(item => !(1 <= item.id && item.id <= 9) && !(1001 <= item.id && item.id <= 1009));
        }
    },
}
</script>