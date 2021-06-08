<template>
    <div class="builder mt-3">
        <div class="builder-row" v-for="(row, rIndex) in gridContent" :key="rIndex">
            <div class="builder-col" v-for="(col, cIndex) in row" :key="cIndex">
                <div class="hex"
                     :class="!IsNull(col) ? `cost-${col.cost}` : ``"
                     :draggable="IsNull(col) ? 'false' : 'true'"
                     @dragstart="onDragStart($event, rIndex + '__' + cIndex, '')"
                     @drop="onDrop($event, rIndex + '__' + cIndex)" @dragover.prevent @dragenter.prevent
                >
                    <img class="hex__in" v-if="!IsNull(col)" :src="require(`@/assets/TFT/champions/${col.championId}.png`)"/>
                </div>
                <div class="hex__top" v-if="!IsNull(col)">
                    <img v-for="trait in col.traits" :key="trait" class="d-inline-block tft__margin-5" :src="require(`@/assets/TFT/traits/${trait}.png`)"/>
                </div>
                <div class="hex__bottom" v-if="!IsNull(col)">
                    <img v-for="(item, index) in (col.items === undefined || col.items === null ? [] : col.items)" :key="`${item}__${index}`"
                         class="d-inline-block tft__margin-5 circle"
                         @dragstart="onDragStart($event, rIndex + '__' + cIndex + '__' + item, 'img')"
                         :src="require(`@/assets/TFT/items/` + GetItemName(item) + `.png`)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Utils from "../../Utils/Utils.js";
export default {
    props: {
        onDrop: {
            type: Function,
        },
        onDragStart: {
            type: Function,
        },
        gridContent: {
            type: Array,
            default: null,
        }
    },
    methods: {
        IsNull(v) {
            return v === undefined || v === null;
        },
        GetItemName(itemName) {
            if (itemName.length === 1) return '0' + itemName;
            return itemName;
        },
    },

}
</script>

<style>
.builder {
    text-align: center;
    position: relative;
}

.builder-row {
    display: inline-flex;
    margin-left: 0;
    margin-top: -15px;
    overflow: hidden;
}

.builder-row:nth-child(1) {
    margin-top: 0;
}

.builder-row:nth-child(even) {
    /*margin-left: 10%;*/
    margin-left: 100px;
}

.builder-col {
    text-align: center;
    align-items: center;
    /*display: inline-block;*/
    position: relative;
    width: 100px;
}

.hex {
    position: relative;
    height: 100px;
    width: 90px;
    background: #111;
    margin: 5px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex__in {
    top: 0px;
    position: relative;
    height: 90px;
    width: 80px;
    background: #111;
    margin: 5px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.02);
}

.hex__in:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgba(0, 0, 0, 0.02);
}

.hex__top {
    top: -4px;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    height: 20%;
    z-index: 999;
    position: absolute;
    text-align: center;
}

.hex__bottom {
    top: auto;
    left: 0;
    right: 0;
    bottom: 10px;
    width: 100%;
    height: 20%;
    z-index: 999;
    position: absolute;
    text-align: center;
}

.hex__top > img, .hex__bottom > img {
    top: 0;
    align-items: center;
    vertical-align: center;
    height: 100%;
}

@media screen and (max-width: 991px) {
    .builder-col {
        width: 50px;
    }

    .hex {
        height: 50px;
        width: 45px;
        margin: 1px;
    }

    .hex__in {
        height: 40px;
        width: 35px;
        margin: 5px;
    }

    .builder-row {
        margin-top: -1px;
    }

    .builder-row:nth-child(1) {
        margin-top: 0;
    }

    .builder-row:nth-child(even) {
        margin-left: 50px;
    }

    .hex__top {
        top: -10px;
    }

    .hex__bottom {
        bottom: 15px;
    }
}

@media screen and (max-width: 443px) {
    .builder-col {
        width: 28px;
    }

    .hex {
        height: 25px;
        width: 21px;
        margin: 3px;
    }

    .hex__in {
        height: 23px;
        width: 19px;
        margin: 1px;
    }

    .builder-row {
        margin-top: -1px;
    }

    .builder-row:nth-child(1) {
        margin-top: 0;
    }

    .builder-row:nth-child(even) {
        margin-left: 25px;
    }
}
</style>
