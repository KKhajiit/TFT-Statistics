<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <Trait :grid-content="gridContent"/>
            </div>
            <div class="col-9">
                <Grid ref="grid" :on-drop="OnDropGet" :on-drag-start="OnDragStartFromGrid" v-bind:grid-content="gridContent"/>

                <div class="alert alert-warning" role="alert" v-if="messageView">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span class="tft__margin__left-10">{{ message }}</span>
                    <div class="float-end" style="cursor: pointer;" @click="DisableMessage"><i class="fas fa-times"></i></div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <ChampionsList :on-drag-start="OnDragStartGet" :on-drop="OnDropFromGrid"/>
                    </div>
                    <div class="col-5">
                        <ItemsList :on-drag-start="OnDragStartGet" :on-drop="OnDropFromGrid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Grid from './Grid.vue';
import Trait from "./Trait.vue";
import ChampionsList from '../Champions/Index.vue';
import ItemsList from '../Items/Index.vue';
import Champions from '../../Utils/champions.js';
import Items from '../../Utils/items.js';
import Utils from "../../Utils/Utils.js";

const UniqueItem = '해당 아이템은 중복해서 줄 수 없습니다.';
const ItemLimits3 = '한 챔피언에 아이템은 최대 3개까지 입니다.';
const IfNoUnitNoItem = '아이템을 배치하기 전에 챔피언을 배치하세요.';
const AlreadyTrait = '해당 챔피언은 이미 해당 시너지를 가지고 있습니다.';

export default {
    components: {
        Grid,
        ChampionsList,
        ItemsList,
        Trait,
    },
    data() {
        return {
            gridContent: null,
            messageView: false,
            message: 'message'
        };
    },
    mounted() {
        this.ResetGridContent();
    },
    methods: {
        ResetGridContent() {
            this.gridContent = new Array(4);
            for (let i = 0; i < 4; i++) {
                this.gridContent[i] = new Array(7);
                for (let j = 0; j < 7; j++) {
                    this.gridContent[i][j] = null;
                }
            }
        },
        SetMessage(msg) {
            this.message = msg;
            this.messageView = true;
        },
        DisableMessage() {
            this.messageView = false;
        },
        UpdateCell(r, c, data) {
            const newRow = this.gridContent[r];
            newRow[c] = data;
            this.$set(this.gridContent, r, newRow)
        },
        AddItemToUnit(r, c, itemId) {
            const traitKey = Items.GetTraitKey(itemId);
            const newRow = this.gridContent[r];
            if (newRow[c] === null) {
                this.SetMessage(IfNoUnitNoItem);
                return;
            }
            if (!Object.prototype.hasOwnProperty.call(newRow[c], 'items')) {
                newRow[c].items = [];
            }
            if (Items.GetItemById(itemId).isUnique && newRow[c].items.filter(x => x == itemId).length > 0) {
                this.SetMessage(UniqueItem);
                return;
            }
            if (newRow[c].traits.indexOf(traitKey) > -1) {
                this.SetMessage(AlreadyTrait);
                return;
            }
            if (newRow[c].items.length >= 3) {
                this.SetMessage(ItemLimits3);
                return;
            }
            newRow[c].items.push(itemId);
            this.$set(this.gridContent, r, newRow);
        },
        DeleteItemFromUnit(r, c, itemId) {
            const newRow = this.gridContent[r];
            if (newRow[c] === null) {
                return;
            }
            if (!Object.prototype.hasOwnProperty.call(newRow[c], 'items')) {
                return;
            }
            let kIndex = newRow[c].items.indexOf(itemId);
            if (itemId > -1) {
                newRow[c].items.splice(kIndex, 1);
            }
            this.$set(this.gridContent, r, newRow);
        },
        OnDragStartGet(event, code, index) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData(`${code}Index`, index);
        },
        OnDropGet(event, ref) {
            let index = event.dataTransfer.getData(`${Champions.Code()}Index`);
            let [i, j] = ref.split('__');
            if (!Utils.IsNull(index)) {
                event.dataTransfer.clearData(`${Champions.Code()}Index`);
                this.UpdateCell(i, j, Champions.GetChampion(index));
                // console.log(i + ' ' + j + ' ' + JSON.stringify(this.gridContent));
            } else if (!Utils.IsNull(index = event.dataTransfer.getData(`${Items.Code()}Index`))) {
                event.dataTransfer.clearData(`${Items.Code()}Index`);
                this.AddItemToUnit(i, j, index);
            } else {
                index = event.dataTransfer.getData('ref');
                let [ii, ij] = index.split('__');
                event.dataTransfer.clearData('ref');
                let tmp = this.gridContent[i][j];
                this.UpdateCell(i, j, this.gridContent[ii][ij]);
                this.UpdateCell(ii, ij, tmp);
            }
        },
        OnDragStartFromGrid(event, ref, type) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData(type + 'ref', ref);
        },
        OnDropFromGrid(event) {
            let ref = event.dataTransfer.getData('ref');
            let imgRef = event.dataTransfer.getData('imgref');
            if (ref !== undefined && ref !== null && ref !== '') {
                event.dataTransfer.clearData('ref');
                let [i, j] = ref.split('__');
                this.UpdateCell(i, j, null);
            } else if (imgRef !== undefined && imgRef !== null && imgRef !== '') {
                event.dataTransfer.clearData('imgref');
                let [i, j, k] = imgRef.split('__');
                this.DeleteItemFromUnit(i, j, k);
            }
        },
    },
}
</script>