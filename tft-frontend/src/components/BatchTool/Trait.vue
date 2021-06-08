<template>
    <div v-if="ActiveTrait !== []" class="mt-4">
        <div class="active__trait mb-2 p-2" v-for="(trait, index) in ActiveTrait" :key="index + 'trait'">
            <div class="d-inline-block align-middle m-2">
                <div class="trait__bg trait__img__bg__30" :class="`trait__img__bg__${trait.style}`">
                    <img :src="require(`@/assets/TFT/traits/${trait.key}.svg`)"/>
                </div>
            </div>
            <div v-if="trait.style !== null" class="d-inline-block align-middle p-2 m-2 text-white real__active__trait__count">
                {{ trait.value }}
            </div>
            <div class="d-inline-block align-middle m-2">
                    <span class="text-white fw-bold">
                        {{ trait.name }}
                    </span>
                <div v-if="trait.style !== null" class="text-grey">
                    <span class="text-white fw-bold">2</span>
                    <i class="fa fa-caret-right mx-2"></i>
                    <span>4</span>
                </div>
                <div v-else class="text-grey">
                    {{ trait.value }} / {{ trait.sets[0] }}
                </div>
            </div>
        </div>
    </div>
    <div v-else class="mt-4">
        <div class="active__trait mb-2 p-2">
            <div class="d-inline-block align-middle m-2">
            </div>
            <div class="d-inline-block align-middle p-2 m-2 text-white real__active__trait__count">
                2
            </div>
            <div class="d-inline-block align-middle m-2">
                    <span class="text-white fw-bold">
                        암살자
                    </span>
                <div class="text-grey">
                    <span class="text-white fw-bold">2</span>
                    <i class="fa fa-caret-right mx-2"></i>
                    <span>4</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Traits from '../../Utils/traits.js';
import Items from '../../Utils/items.js';

export default {
    props: {
        gridContent: {
            type: Array,
            default: null,
        }
    },
    computed: {
        ActiveTrait() {
            if (this.gridContent === null) return;
            let middle = {};
            let normalArray = new Array(28);
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 7; j++) {
                    normalArray[7 * i + j] = this.gridContent[i][j];
                }
            }

            normalArray = normalArray.filter(x => x !== null);

            let check = {};
            for (let i = normalArray.length - 1; i >= 0; i--) {
                for (let j = normalArray[i].traits.length - 1; j >= 0; j--) {
                    let cacheTraitName = normalArray[i].traits[j];
                    if (Object.hasOwnProperty.call(check, normalArray[i].name + cacheTraitName)) continue;
                    check[normalArray[i].name + cacheTraitName] = true;
                    if (Object.hasOwnProperty.call(middle, cacheTraitName)) middle[cacheTraitName]++;
                    else middle[cacheTraitName] = 1;
                }
                if (!Object.hasOwnProperty.call(normalArray[i], 'items')) continue;
                for (let j = normalArray[i].items.length - 1; j >= 0; j--) {
                    let itemId = normalArray[i].items[j];
                    let cacheTraitName = Items.GetTraitKey(itemId);
                    if (Object.hasOwnProperty.call(check, normalArray[i].name + cacheTraitName)) continue;
                    check[normalArray[i].name + cacheTraitName] = true;
                    if (cacheTraitName.length === 0) continue;
                    if (Object.hasOwnProperty.call(middle, cacheTraitName)) middle[cacheTraitName]++;
                    else middle[cacheTraitName] = 1;
                }
            }
            let ret = [];

            for (let m in middle) {
                ret.push(Traits.GetActivationStatus(m, middle[m]));
            }

            const sortOrder = ['chromatic', 'gold', 'silver', 'bronze', null];

            ret.sort(function (a, b) {
                return sortOrder.indexOf(a.style) - sortOrder.indexOf(b.style);
            });

            return ret;
        },
    }
}
</script>

<style>
.active__trait {
    border: 3px solid #111111;
}

.real__active__trait__count {
    background: #12113b;
    border-radius: 10%;
}
</style>