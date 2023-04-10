import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';

interface File {
  originalname:string;
  filename:string;
  location:string
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/files'


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private http:HttpClient
  ) { }

  getFile(name: string,url:string, type:string){
    return this.http.get(url,{responseType: 'blob'})
    .pipe(
      tap(content =>{ //recibimos el contenido
        const blob = new Blob([content],{type})//[contenido que me da http , type formato del archivo]
        saveAs(blob,name);
      }),
      map(() => true)//despues de descargado el contenido me devuelva un true (si todo salio bioen) o un false
    )
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file',file);
    return this.http.post<File>(`${this.apiUrl}/upload`,dto,{
     /*  headers:{
        'Content-type': "multipart/form-data"
      } */
    })
  }
}
