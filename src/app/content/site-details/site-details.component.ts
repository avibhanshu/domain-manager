import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DomainsService } from '../domains.service';
import { Domain } from '../models/domain';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
})
export class SiteDetailsComponent implements OnInit, OnDestroy {
  domains: Domain[] = [];
  domainsSubscription: Subscription;
  constructor(private domainService: DomainsService) {}

  ngOnInit(): void {
    // this.domainsSubscription = this.domainService.fetchDomains().subscribe(
    //   (data) => {
    //     this.domains = data;
    //     console.log(data);
    //   },
    //   (err) => console.log(err)
    // );
    this.domainsSubscription = this.domainService.domainAdded.subscribe(
      (domains) => (this.domains = domains)
    );
    this.domainService.fetchDomains();
  }

  onAddDomain(form: NgForm) {
    console.log(form);
    // this.domainService.addDomain();
  }

  columns = [
    'Domain & Plan Name',
    'Storage',
    'Monthly Visitor',
    'Domains',
    'Status',
  ];

  index = [
    // 'id',
    'domain',
    'storage',
    // 'usedStorage',
    // 'domainTag',
    'monthlyVisitor',
    'availableDomains',
    'status'
    // 'usedDomains',
    // 'monthlyVisitorCapacity',
    // 'subdomain',
  ];

  ngOnDestroy(): void {
    this.domainsSubscription.unsubscribe();
  }
}
