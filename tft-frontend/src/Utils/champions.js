import championList from '../assets/TFT/champions.json';

export default class Champions {
    static Code() {
        return 'champion';
    }

    static GetChampions() {
        return championList.map(x => x);
    }

    static GetChampion(index) {
        return { ...championList[index] };
    }
}