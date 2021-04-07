import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Jugador } from "../jugador";
import { URL } from "../services/global";
@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }
  save(goleadores: Jugador[], id: string): Observable<any[]> {
    return this.http.put<any[]>(`${URL}/partidos/${id}`, goleadores)
      .pipe(
        tap(_ => this.log('Cuentas recibidas')),
        catchError(this.handleError<any[]>('devolverCuentas', []))
      );
  }
  get(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${URL}/partidos/${id}`)
      .pipe(
        tap(_ => this.log('Cuentas recibidas')),
        catchError(this.handleError<any[]>('devolverCuentas', []))
      );
  }
  private log(mensaje: string): void {
    console.log(mensaje);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
