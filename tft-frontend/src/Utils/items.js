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

    static GetTraitKey(id) {
        const item = this.GetItemById(id);
        if (!item.name.includes("Emblem")) {
            return '';
        }
        return 'Set5_' + item.name.split(' ')[0];
    }
}