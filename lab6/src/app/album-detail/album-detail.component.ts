import { Component,OnInit } from '@angular/core';
import {AlbumsService} from "../albums.service";
import {albumList} from "../albumList";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: albumList;
  loaded: boolean;

  newName: string;
  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
        this.album = {} as albumList;
        this.newName = '';
        this.loaded = true;
  }

  ngOnInit():void {
    this.route.paramMap.subscribe((albums) =>{
      let _id = albums.get('id');
      if(_id) {
        let id = +_id;
        this.loaded = false;
        this.albumsService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    });
  }

  ChangeName(){
        this.albumsService.changeTitle(this.album.id, this.newName).subscribe((album) => {
          this.album.title = album.title
        })
  }

}
