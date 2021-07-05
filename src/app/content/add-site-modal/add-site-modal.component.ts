import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Domain } from 'src/app/models/domain';
import { Subdomain } from 'src/app/models/subdomain';

@Component({
  selector: 'add-site-modal',
  templateUrl: './add-site-modal.component.html',
  styleUrls: ['./add-site-modal.component.scss']
})
export class AddSiteModalComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();
  @Output() submitForm = new EventEmitter();
  domainName: string = '';
  subdomainName: string = '';
  storage: string = '';
  monthlyVisitor: number;
  domainTags: string[] = ['Primary', 'Add On', 'Staging'];

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  onAddDomain(form: NgForm) {
      const subdomain: Subdomain = {
        id: Math.floor(Math.random() * 100),
        usedStorage: '0 GB',
        name: form.value.subdomain,
        monthlyVisitor: form.value.monthlyVisitor,
        domainTag: this.domainTags[Math.floor(Math.random() * this.domainTags.length)]
      }
    const newDomain: Domain = {
      id: Math.floor(Math.random() * 100),
      domain: form.value.domain,
      usedStorage: '0 GB',
      storage: `${form.value.storage} GB`,
      monthlyVisitor: form.value.monthlyVisitor,
      monthlyVisitorCapacity: 10000,
      usedDomains: 1,
      availableDomains: 10,
      subdomain: form.value.subdomain ? [subdomain] : []
    }
    this.submitForm.emit(newDomain);
    this.closeModal();
  }

}
