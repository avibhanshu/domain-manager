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

  calcProgress(usedCapacity: any, totalCapacity: any) {
    const numerator = parseInt(usedCapacity.toString());
    const denominator = parseInt(totalCapacity.toString());
    const percentage = (numerator/denominator) * 100;
    return `${percentage}%`;
  }

  getTagClass(tag: string) {
    const classObj = {
      Primary: 'primary',
      Staging: 'staging',
      'Add On': 'add-on',
      Active: 'active',
      Inactive: 'inactive'
    }
    return classObj[tag];
  }

  columns = [
    'Domain Name',
    'Storage',
    'Monthly Visitor',
    'Domains',
    'Status',
  ];

  ngOnDestroy(): void {
    this.domainsSubscription.unsubscribe();
  }
}
