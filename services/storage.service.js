const path = require('path');
const fs = require('fs');

class StorageService {

    static instance;

    _storage = this.retrieveFromStorage();

    retrieveFromStorage() {
        let file = {};

        try {
            this.ensureDataDirExists();
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
        this.ensureDataDirExists();
        fs.writeFileSync(this.getStorageLocation(), JSON.stringify(this._storage));
    }

    getStorageLocation(entire = true) {
        return path.join(__dirname, '..', 'data', entire ? 'storage.json' : '');
    }

    ensureDataDirExists() {
        if (!fs.existsSync(this.getStorageLocation(false))) {
            fs.mkdirSync(this.getStorageLocation(false));
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new StorageService();
        }

        return this.instance;
    }
}

module.exports = StorageService;
