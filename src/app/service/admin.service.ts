import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ApiConfig } from '../constant/api';
import { Client, CLientCategory } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = `${ApiConfig.URL}${ApiConfig.CLIENT}`;
  categoryUrl = `${ApiConfig.URL}${ApiConfig.CLIENTCATEGORY}`;
  clientList: Client[] = [];
  constructor(private httpClient: HttpClient) { }
  // Add Client
  AddClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client).pipe(
      map(x => {
        this.clientList.push(x);
        return client;
      }),
      catchError(this.handleError('', client))
    );
  }
  // updating exisiting client's data
  updateCLient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.url}`, client).pipe(
      map(x => {
        // tslint:disable-next-line:prefer-const
        let index = this.clientList.findIndex(i => i.id === x.id)
        this.clientList[index] = x;
        return client;
      }),
      catchError(this.handleError('', client))
    );
  }
  // Get client list
  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url).pipe(
      map(x => {
        this.clientList = x;
        return this.clientList;
      })
    );
  }

  getClientCategory(): Observable<CLientCategory[]> {
    return this.httpClient.get<CLientCategory[]>(this.categoryUrl).pipe(
      map(x => {
        return x;
      })
    );
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      //  this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}