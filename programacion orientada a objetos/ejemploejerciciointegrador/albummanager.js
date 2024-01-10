"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumManager = void 0;
var album_1 = require("./album");
var filemanager_1 = require("./filemanager");
var rs = require("readline-sync");
var AlbumManager = /** @class */ (function () {
    function AlbumManager() {
        this.menuOptions = ["List Albums", "Create Album", "Update Album", "Delete Album"];
        this.albums = [];
    }
    AlbumManager.prototype.readAlbums = function () {
        var readResult = filemanager_1.FileManager.readAlbums();
        if (readResult) {
            this.albums = readResult;
            console.log("======== Albums =========\n");
            if (!this.albums.length) {
                console.log("No albums found. \n");
            }
            else {
                this.albums.forEach(function (album) {
                    console.log("\n        ID: ".concat(album.id, "\n        Title: ").concat(album.title, "\n        Artist: ").concat(album.artist, "\n        Year: ").concat(album.year, "\n        Record Label: ").concat(album.recordLabel, "\n        ---\n               \n        "));
                });
            }
        }
        rs.keyInPause("\n");
    };
    AlbumManager.prototype.createAlbum = function () {
        console.log("=========Create album===========");
        rs.keyInPause();
        var readResult = filemanager_1.FileManager.readAlbums();
        if (readResult) {
            this.albums = readResult;
        }
        var title = rs.question("Enter the title of the record to create: ");
        var artist = rs.question("Enter the name of the artist: ");
        var recordLabel = rs.question("Enter the name of the label: ");
        var year = rs.questionInt("Enter the year of the record: ");
        var newAlbum01 = new album_1.Album(title, artist, year, recordLabel);
        this.albums.push(newAlbum01);
        rs.keyInPause("\n");
        filemanager_1.FileManager.appendAlbum(this.albums);
        console.log(this.albums);
        rs.keyInPause();
    };
    AlbumManager.prototype.updateAlbum = function () {
        console.log("Update Album...");
        rs.keyInPause();
        var readResult = filemanager_1.FileManager.readAlbums();
        if (readResult) {
            this.albums = readResult;
        }
        var idToUpdate = rs.question("Enter the ID of the record to update: ");
        var recordIndex = this.albums.findIndex(function (album) { return album.id === idToUpdate; });
        if (recordIndex !== -1) {
            var recordToUpdate = this.albums[recordIndex];
            var confirmation = rs.keyInYN("Do you want to update ".concat(recordToUpdate.title, " ? "));
            if (confirmation) {
                recordToUpdate.artist = rs.question("Enter the new name of the artist");
                filemanager_1.FileManager.appendAlbum(this.albums);
            }
            else {
                console.log("Updated cancelled. Album not updated. \n");
            }
        }
        else {
            console.log("Album not found.\n");
        }
        rs.keyInPause();
    };
    AlbumManager.prototype.deleteAlbum = function () {
        console.log("======== Delete Record ========\n");
        var readResult = filemanager_1.FileManager.readAlbums();
        if (readResult) {
            this.albums = readResult;
        }
        var idToDelete = rs.question("Enter the ID of the record to delete: ");
        var recordIndex = this.albums.findIndex(function (album) { return album.id === idToDelete; });
        if (recordIndex !== -1) {
            var recordToDelete = this.albums[recordIndex];
            var confirmation = rs.keyInYN("Do you want to delete ".concat(recordToDelete.title, " ? (Y/N)"));
            if (confirmation) {
                this.albums.splice(recordIndex, 1);
                filemanager_1.FileManager.appendAlbum(this.albums);
            }
            else {
                console.log("Deletion canceled. Album not removed. \n");
            }
        }
        else {
            console.log("Album not found.\n");
        }
        rs.keyInPause();
    };
    AlbumManager.prototype.menu = function () {
        while (true) {
            console.clear();
            var choice = rs.keyInSelect(this.menuOptions);
            switch (choice) {
                case 0:
                    this.readAlbums();
                    break;
                case 1:
                    this.createAlbum();
                    break;
                case 2:
                    this.updateAlbum();
                    break;
                case 3:
                    this.deleteAlbum();
                    break;
                default:
                    console.log("\n      -------------\n      |           |\n      | GOOD BYE! | \n      |  SEE YOU  |\n      |   LATER   |\n      |           |\n      ------------- \n      ");
                    return;
            }
        }
    };
    return AlbumManager;
}());
exports.AlbumManager = AlbumManager;
