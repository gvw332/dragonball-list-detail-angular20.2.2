import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DragonballItems, DragonballLinks, DragonballListResponse, DragonballMeta  } from '../models/dragonball';
import { DragonballDetail } from '../models/dragonball-detail';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<{ items: DragonballItems[], meta: DragonballMeta, links: DragonballLinks }> {
    return this.http.get<{ items: DragonballItems[], meta: DragonballMeta, links: DragonballLinks }>(`${this.apiUrl}?page=${page}`);
  }

  getCharacterById(id: number): Observable<DragonballDetail> {
      return this.http.get<DragonballDetail>(`${this.apiUrl}/${id}`);
  }
}
