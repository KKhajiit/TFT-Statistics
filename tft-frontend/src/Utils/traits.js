import traitList from '../assets/TFT/traits.json';

export default class Champions {
    static Code() {
        return 'trait';
    }

    static GetTraits() {
        return traitList.map(x => x);
    }

    static GetTrait(key) {
        let ret = traitList.filter(x => x.key === key);
        if (ret.length === 0) return null;
        return {...ret[0]};
    }

    static GetActivationStatus(key, value) {
        const trait = this.GetTrait(key);
        let ret = {};
        ret.key = trait.key;
        ret.name = trait.name;
        ret.description = trait.description;
        ret.style = null;
        ret.sets = [];
        const length = trait.sets.length;
        for (let i = 0; i < length; i++) {
            ret.sets.push(trait.sets[i].min);
            if (trait.sets[i].min <= value) {
                ret.style = trait.sets[i].style;
            }
        }
        ret.value = value;
        return ret;
    }
}