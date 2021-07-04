import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Domain } from '../../models/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {
  domains: Domain[] = [];
  domainAdded = new Subject<Domain[]>();
  domainsListUrl: string = "http://localhost:3000/domainList";
  
  constructor(private http: HttpClient) { }

  fetchDomains() {
    this.http.get<Domain[]>(this.domainsListUrl).subscribe((domains: Domain[]) => {
      this.domains = domains;
      this.domainAdded.next([...this.domains]);
    });
  }
  
  addDomain(domain: Domain) {
    this.http.post<Domain>(this.domainsListUrl, domain);
    this.fetchDomains();
  }
}
