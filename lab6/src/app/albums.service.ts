import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {albumList} from "./albumList";
import {AlbumPhotos} from "./albumPhotos";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<albumList[]>{
    return this.client.get<albumList[]>(`https://jsonplaceholder.typicode.com/albums`)
  }

  getAlbum(id: number): Observable<albumList>{
    return this.client.get<albumList>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  addAlbum(album: albumList):Observable<albumList>{
    return this.client.post<albumList>(`https://jsonplaceholder.typicode.com/albums`, album);
  }
  getAlbumPhoto(id: number): Observable<AlbumPhotos[]>{
    return this.client.get<AlbumPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  changeTitle(id: number, newName: string){
    return this.client.put<albumList>(`https://jsonplaceholder.typicode.com/albums/${id}`, {title:newName});
  }
}
