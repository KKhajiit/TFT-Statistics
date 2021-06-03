import itemList from '../assets/TFT/items.json';
export default class Champions {
    static Code() {
        return 'item';
    }

    static GetItems() {
        return itemList.map(x => x);
        // return { ...itemList };
    }

    static GetItemById(id) {
        return { ...itemList.filter(x => x.id == id)[0] };
    }
}