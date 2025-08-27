import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupItem } from '../modules/employees/manage-employees/manage-employees.component';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private apiUrl = 'your-api-endpoint/lookups';

  constructor(private http: HttpClient) { }

  getLookupByType(lookupType: string): Observable<LookupItem[]> {
    return this.http.get<LookupItem[]>(`${this.apiUrl}/${lookupType}`);
  }

  getAllLookups(): Observable<{ [key: string]: LookupItem[] }> {
    return this.http.get<{ [key: string]: LookupItem[] }>(this.apiUrl);
  }
}