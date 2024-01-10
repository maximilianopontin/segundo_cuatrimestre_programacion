"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var FileManager = /** @class */ (function () {
    function FileManager() {
    }
    FileManager.readAlbums = function () {
        try {
            var albums = fs.readFileSync("./albums.json", { encoding: "utf-8" });
            console.log("Lectura de datos satisfactoria");
            rs.keyInPause("\n");
            return JSON.parse(albums);
        }
        catch (err) {
            console.log("Unexpected Error:", err);
        }
        //Pause to display messages
        rs.keyInPause("\n");
    };
    FileManager.appendAlbum = function (data) {
        try {
            fs.writeFileSync("./albums.json", JSON.stringify(data), {
                encoding: "utf8",
            });
            console.log("Operation completed!\n");
            rs.keyInPause("\n");
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    return FileManager;
}());
exports.FileManager = FileManager;
