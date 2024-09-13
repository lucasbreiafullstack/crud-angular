import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Fazenda {
  id?: string;
  nome: string;
  matricula: string;
  localizacao: string;
  dono: string;
  area: number;
  tipo_plantacao: string;
}

@Injectable({
  providedIn: 'root',
})
export class FazendaService {
  private apiUrl = 'http://localhost:3000/fazendas';

  constructor(private http: HttpClient) {}

  getFazendas(): Observable<Fazenda[]> {
    return this.http.get<Fazenda[]>(this.apiUrl);
  }

  getFazenda(id: string): Observable<Fazenda> {
    return this.http.get<Fazenda>(`${this.apiUrl}/${id}`);
  }

  createFazenda(fazenda: Fazenda): Observable<any> {
    return this.http.post(this.apiUrl, fazenda);
  }

  updateFazenda(id: string, fazenda: Fazenda): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, fazenda);
  }

  deleteFazenda(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
