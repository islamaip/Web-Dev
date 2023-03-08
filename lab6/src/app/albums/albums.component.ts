import { Component, OnInit } from '@angular/core';
import { albumList } from "../albumList";
import { AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: albumList[];

  newAlbum: albumList;
  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as albumList;
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
    })
  }
  deleteAlbum(albumTitle: number) {
    this.albums = this.albums.filter((x) => x.id !== albumTitle)
  }

  addAlbum(){
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) =>{
      this.albums.unshift(album);
      this.newAlbum = {} as albumList;
    })
  }

}
