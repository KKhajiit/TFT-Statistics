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
        return { ...ret[0] };
    }
}