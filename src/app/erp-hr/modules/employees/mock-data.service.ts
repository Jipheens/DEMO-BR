import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private storageKey = 'clientManagementData';

  constructor() { }

  getAll(): Observable<any[]> {
    try {
      const data = localStorage.getItem(this.storageKey);
      return of(data ? JSON.parse(data) : []).pipe(delay(500)); 
    } catch (error) {
      return throwError(() => new Error('Failed to retrieve data'));
    }
  }

  create(item: any): Observable<any> {
    return this.getAll().pipe(
      map(existingData => {
        const newData = [...existingData, item];
        localStorage.setItem(this.storageKey, JSON.stringify(newData));
        return { statusCode: 201, message: 'Client created successfully', entity: item };
      })
    );
  }

  getById(id: string): Observable<any> {
    return this.getAll().pipe(
      map(data => {
        const item = data.find((i: any) => i.RequestID === id || i.id === id);
        if (item) {
          return { statusCode: 200, entity: item };
        } else {
          throw new Error('Record not found');
        }
      })
    );
  }

getByClientId(clientId: string): Observable<any> {
  try {
    const data = localStorage.getItem(this.storageKey);
    const items = data ? JSON.parse(data) : [];
    
    // Find the item by clientId in RequestData
    const item = items.find((i: any) => {
      const requestData = i.RequestData || i;
      return requestData.clientId === clientId;
    });
    
    if (item) {
      return of({ statusCode: 200, entity: item });
    } else {
      return throwError(() => new Error('Record not found with clientId: ' + clientId));
    }
  } catch (error) {
    return throwError(() => new Error('Failed to retrieve data by clientId'));
  }
}



update(item: any): Observable<any> {
  return this.getAll().pipe(
    map(existingData => {
      let index = existingData.findIndex((i: any) => i.RequestID === item.RequestID);
      
      if (index === -1 && item.RequestData && item.RequestData.clientId) {
        index = existingData.findIndex((i: any) => 
          (i.RequestData && i.RequestData.clientId === item.RequestData.clientId) || 
          i.clientId === item.RequestData.clientId
        );
      }
      
      if (index !== -1) {
        existingData[index] = item;
        localStorage.setItem(this.storageKey, JSON.stringify(existingData));
        return { statusCode: 200, message: 'Client updated successfully', entity: item };
      } else {
        throw new Error('Record not found');
      }
    }),
    catchError(error => throwError(() => error))
  );
}

delete(identifier: string): Observable<any> {
  return this.getAll().pipe(
    map(existingData => {
      let filteredData = existingData.filter((i: any) => 
        i.RequestID !== identifier && i.id !== identifier
      );
      
      if (filteredData.length === existingData.length) {
        filteredData = existingData.filter((i: any) => {
          const clientData = i.RequestData || i;
          return clientData.clientId !== identifier;
        });
        
        if (filteredData.length === existingData.length) {
          throw new Error('Record not found with identifier: ' + identifier);
        }
      }
      
      localStorage.setItem(this.storageKey, JSON.stringify(filteredData));
      return { statusCode: 200, message: 'Client deleted successfully' };
    }),
    catchError(error => throwError(() => error))
  );
}

deleteByClientId(clientId: string): Observable<any> {
  return this.getAll().pipe(
    map(existingData => {
      const filteredData = existingData.filter((i: any) => {
        const clientData = i.RequestData || i;
        return clientData.clientId !== clientId;
      });
      
      if (filteredData.length === existingData.length) {
        throw new Error('Record not found with clientId: ' + clientId);
      }
      
      localStorage.setItem(this.storageKey, JSON.stringify(filteredData));
      return { statusCode: 200, message: 'Client deleted successfully' };
    }),
    catchError(error => throwError(() => error))
  );
}


  exportToFile(): void {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        const blob = new Blob([data], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'client-data-backup.json';
        link.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Failed to export data:', error);
    }
  }

  importFromFile(file: File): Observable<any> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const data = JSON.parse(e.target.result);
          if (Array.isArray(data)) {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            observer.next({ statusCode: 200, message: 'Data imported successfully' });
            observer.complete();
          } else {
            observer.error(new Error('Invalid file format'));
          }
        } catch (error) {
          observer.error(new Error('Failed to parse JSON file'));
        }
      };
      reader.onerror = () => {
        observer.error(new Error('Failed to read file'));
      };
      reader.readAsText(file);
    });
  }
}