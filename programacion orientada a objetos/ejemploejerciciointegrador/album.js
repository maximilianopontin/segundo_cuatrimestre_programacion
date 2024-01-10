"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
var crypto = require("node:crypto");
var Album = /** @class */ (function () {
    function Album(title, artist, year, recordLabel) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.recordLabel = recordLabel;
    }
    return Album;
}());
exports.Album = Album;
