import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Response} from '@angular/http';

const URL_BASE = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"

@Injectable({
  providedIn: 'root'
})
export class DragonServiceService {
 
  constructor(private http: Http) { }


  getDragons() {
    const encodedURI  = encodeURI(URL_BASE)
    return this.http.get(encodedURI)
      .pipe(    
        map((response: Response) => response.json())
      );
  }

  getDragonById(id: string) {
    const encodedURI  = encodeURI(URL_BASE + `/${id}`)
    return this.http.get(encodedURI)
      .pipe(    
        map((response: Response) => response.json())
      );
  }

  editDragon(dragon: any) {
    const encodedURI = encodeURI(URL_BASE + `/${dragon.id}`)
    return this.http.put(encodedURI, dragon)
      .pipe(
        map((response: Response) => response.json())
      );
  }

  createDragon(dragon: any) { 
    const encodedURI = encodeURI(URL_BASE)
    return this.http.post(encodedURI, dragon)
      .pipe(
        map((response: Response) => response.json())
      );
  }

  deleteDragon(id: string) {
    const encodedURI = encodeURI(URL_BASE + `/${id}`)
    return this.http.delete(encodedURI)
      .pipe(
        map((response: Response) => response.json())
      );
  }
}