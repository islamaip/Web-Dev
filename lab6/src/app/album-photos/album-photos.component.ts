import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../albums.service";
import {AlbumPhotos} from "../albumPhotos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  album: AlbumPhotos[];
  albumId: number | undefined;
  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
    this.album = [];
  }

  ngOnInit():void {
    this.route.paramMap.subscribe((albums) =>{
      let _id = albums.get('id');
      this.albumId = Number(albums.get('id'));
      if(_id) {
        let id = +_id;
        this.albumsService.getAlbumPhoto(id).subscribe((album) => {
          this.album = album;
        })
      }
    });
  }
}
