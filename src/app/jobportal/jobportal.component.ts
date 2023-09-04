// list.component.ts
import { Component, OnInit } from '@angular/core';
import { JobPortalService } from '../job-portal.service';
import { Member } from '../models/member';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './jobportal.component.html',
})
export class JobportalComponent implements OnInit {
  //myForm!: FormGroup;
  itemList: any[] = [];
  newItem: any = {};
  editItem: any = {};

  myForm = new FormGroup({
    id: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl()
  });

  constructor(private jobPortalService: JobPortalService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.jobPortalService.getRows().subscribe((data: any[]) => {
      this.itemList = data;
    });
  }

  addItem() {
    this.jobPortalService.addRow(this.newItem).subscribe(() => {
      this.fetchData(); // Refresh the list after adding a row
      this.newItem = {}; // Clear the form
    });
  }

  deleteItem(id: number) {
    this.jobPortalService.deleteRow(id).subscribe(() => {
    this.fetchData(); // Refresh the list after deleting a row
    this.newItem = {}; // Clear the form
    });
  }

  //updateItem(member: any) {
  //  this.jobPortalService.sendMemberObj(member);
  //}

  updateItem() {
    this.jobPortalService.updateRow(this.editItem).subscribe(() => {
      this.fetchData(); // Refresh the list after adding a row
      this.editItem = {}; // Clear the form
    });
  }


  resetForm() {
    this.myForm.reset(); // Reset the form
    this.newItem = {}; // Clear the form
  }

  getItemId(item: any) {
    //this.jobPortalService.getRowById(item.id);
    var member = this.itemList.map((i) => {
      if (i.id === item.id) {
        this.editItem.id = item.id;
        this.editItem.firstname = i.firstname;
        this.editItem.lastname = i.lastname
       }
    });

  }



}



/*
class A implements Contact {
  FirstName = "Apol"
  LastName = "star"
}

interface Contact {
  FirstName?: string
  LastName?: string
}
*/
