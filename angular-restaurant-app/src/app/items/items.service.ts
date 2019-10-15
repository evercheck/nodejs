import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  // Creates Header
  private _authHeader(): Object {
    return {
      headers: new HttpHeaders({ 'authorization': `Bearer ${this.auth.getAccessToken()}` })
    };
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items');
  }

  public postItems(item: Item): Observable<Item> {
    return this.http.post<Item>('/api/items', item, this._authHeader());
  }

  public postToShoppingCart(): Observable<String> {
    return this.http.post<String>('/api/shopping-cart', '', this._authHeader());
  }

}