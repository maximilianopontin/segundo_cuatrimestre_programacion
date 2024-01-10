import { Album } from "./album";
import { FileManager } from "./filemanager";
import * as rs from "readline-sync";

export class AlbumManager {
  albums: Album[];
  public constructor() {
    this.albums = [];
  }
  readAlbums() {
    const readResult = FileManager.readAlbums();
    if (readResult) {
      this.albums = readResult;
      console.log("======== Albums =========\n");
      if (!this.albums.length) {
        console.log("No albums found. \n");
      } else {
        this.albums.forEach((album) => {
          console.log(`
        ID: ${album.id}
        Title: ${album.title}
        Artist: ${album.artist}
        Year: ${album.year}
        Record Label: ${album.recordLabel}
        ---
               
        `);
        });
      }
    }
    rs.keyInPause("\n");
  }
  createAlbum() {
    console.log("=========Create album===========");
    rs.keyInPause();
    const readResult = FileManager.readAlbums();
    if (readResult) {
      this.albums = readResult;
    }
    const title = rs.question("Enter the title of the record to create: ");
    const artist = rs.question("Enter the name of the artist: ");
    const recordLabel = rs.question("Enter the name of the label: ");
    const year =rs.questionInt("Enter the year of the record: ");

    const newAlbum01 = new Album (title,artist,year,recordLabel);
    this.albums.push(newAlbum01);
    rs.keyInPause("\n");
    FileManager.appendAlbum(this.albums);
     console.log (this.albums);
     rs.keyInPause();
  }
  
  updateAlbum() {
    console.log("Update Album...");
    rs.keyInPause();
    const readResult = FileManager.readAlbums();
    if (readResult) {
      this.albums = readResult;
    }
    const idToUpdate = rs.question("Enter the ID of the record to update: ");
    const recordIndex = this.albums.findIndex(
      (album) => album.id === idToUpdate);
    if (recordIndex !== -1) {
      const recordToUpdate = this.albums[recordIndex];
      const confirmation = rs.keyInYN(
        `Do you want to update ${recordToUpdate.title} ? `
        );
        if (confirmation) {//hacer swich de artista, año, titulo para actualizar cada uno de ellos, con opcion 0,1,2,3
          const newArtist= rs.question ("Enter the new name of the artist");
          recordToUpdate.artist= newArtist;
          FileManager.appendAlbum(this.albums);
        } else {
          console.log("Updated cancelled. Album not updated. \n");
        }
      } else {
        console.log("Album not found.\n");
      }
      rs.keyInPause();
  
  }
  deleteAlbum() {
  console.log("======== Delete Record ========\n");
  const readResult = FileManager.readAlbums();
  if (readResult) {
    this.albums = readResult;
  }
  const idToDelete = rs.question("Enter the ID of the record to delete: ");
    const recordIndex = this.albums.findIndex(
      (album) => album.id === idToDelete);
    if (recordIndex !== -1) {
      const recordToDelete = this.albums[recordIndex];
      const confirmation = rs.keyInYN(
        `Do you want to delete ${recordToDelete.title} ? (Y/N)`
      );
      if (confirmation) {
        this.albums.splice(recordIndex, 1);
        FileManager.appendAlbum(this.albums);
      } else {
        console.log("Deletion canceled. Album not removed. \n");
      }
    } else {
      console.log("Album not found.\n");
    }
    rs.keyInPause();
  }
  menu() {
    while (true) {
      console.clear();
      const choice = rs.keyInSelect(this.menuOptions);
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
          console.log(`
      -------------
      |           |
      | GOOD BYE! | 
      |  SEE YOU  |
      |   LATER   |
      |           |
      ------------- 
      `);
          return;
      }
    }
  }

  menuOptions = ["List Albums", "Create Album", "Update Album", "Delete Album"];
}
