const path = require('path');
const fs = require('fs');

class StorageService {

    static instance;

    _storage = this.retrieveFromStorage();

    retrieveFromStorage() {
        let file = {};

        try {
            file = JSON.parse(fs.readFileSync(this.getStorageLocation()).toString());
        } catch(e) {
            fs.writeFileSync(this.getStorageLocation(), JSON.stringify({}));
        }
        return file;
    }

    get storage() {
        return this._storage;
    }

    saveStorage() {
        fs.writeFileSync(this.getStorageLocation(), JSON.stringify(this._storage));
    }

    getStorageLocation() {
        return path.join(__dirname, '..', 'data', 'storage.json');
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new StorageService();
        }

        return this.instance;
    }
}

module.exports = StorageService;
