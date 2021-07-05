import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DomainsService } from '../services/domains.service';
import { Domain } from '../../models/domain';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
})
export class SiteDetailsComponent implements OnInit, OnDestroy {
  domains: Domain[] = [];
  domainsSubscription: Subscription;
  searchText: string = '';
  entriesCount: number = this.domains.length;
  columns = ['Domain Name', 'Storage', 'Monthly Visitor', 'Domains', 'Status'];
  tagClasses: object = {
    Primary: 'primary',
    Staging: 'staging',
    'Add On': 'add-on',
    Active: 'active',
    Inactive: 'inactive',
  };
  showModal: boolean = false;
  
  constructor(private domainService: DomainsService) {}

  ngOnInit(): void {
    this.domainsSubscription = this.domainService.domainAdded.subscribe(
      (domains) => {
        this.domains = domains;
        this.entriesCount = this.domains.length;
      }
    );
    this.domainService.fetchDomains();
  }

  onAddDomain(newDomain: Domain) {
    this.domainService.addDomain(newDomain);
  }

  closeOrDisplayModal() {
    this.showModal = !this.showModal;
  }

  calcProgress(usedCapacity: any, totalCapacity: any) {
    console.log(usedCapacity, totalCapacity)
    const percentage = (parseInt(usedCapacity.toString()) / parseInt(totalCapacity.toString())) * 100;
    return `${percentage}%`;
  }

  getTagClass(tagName: string) {
    return this.tagClasses[tagName];
  }

  ngOnDestroy(): void {
    this.domainsSubscription.unsubscribe();
  }
}
