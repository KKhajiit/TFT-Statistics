<template>
    <div :class="divClass">
        <div>
            <span style="font-size: 15px;">{{ label }}</span>
            <span v-if="IsValid(rightLabel)" class="float-end">{{ rightLabel }}</span>
        </div>
        <div class="progress" style="height: 5px;">
            <div class="progress-bar" role="progressbar" :style="'width: ' + nowValue + '%'" :aria-valuenow="nowValue" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span v-if="IsValid(bottomLabel)" style="color: grey; font-size: 11px;">상위 {{ bottomLabel }}%</span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: ['divClass', 'label', 'nowValue', 'rightLabel', 'bottomLabel'],
    methods: {
        IsValid(data) {
            return data !== '' && data !== null;
        }
    }
}
</script>