import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public addSchoolForm;

  user: { Etiological?: any, Phylum?: any, order?: any, subclass?: any, history?: any, Pathogenises?: any, Other?: any, Source?: any, Sourceone?: any, Manifestations?: any} = {}
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public viewCtrl: ViewController, public fireData: FirebaseProvider,) {
    this.initializeAddSchoolForm()

  }
  initializeAddSchoolForm() {
    // var createdAt = moment().format();
    this.addSchoolForm = this.formBuilder.group({
  
      typeName: ['', Validators.compose([Validators.required])],
      class: ['', Validators.compose([Validators.required,])],
      Phylum: ['', Validators.compose([Validators.required,])],
     
      Etiological: ['', Validators.compose([Validators.required])],
     

      subclass: ['', Validators.compose([Validators.required,])],
      order: ['', Validators.compose([Validators.required,])],
      history: ['', Validators.compose([Validators.required,])],
      Source: ['', Validators.compose([Validators.required,])],
      Pathogenises: ['', Validators.compose([Validators.required,])],
      Sourceone: ['', Validators.compose([Validators.required,])],
      Other: ['', Validators.compose([Validators.required,])],
      Manifestations: ['', Validators.compose([Validators.required,])],
      // Other: ['', Validators.compose([Validators.required,])],
      
    });
  }
  submitAddSchoolForm() {
    this.fireData.addJob(this.addSchoolForm.value.typeName, this.addSchoolForm.value.class, this.addSchoolForm.value.Phylum, this.addSchoolForm.value.Etiological, this.addSchoolForm.value.subclass, this.addSchoolForm.value.order, this.addSchoolForm.value.history, this.addSchoolForm.value.Source, this.addSchoolForm.value.Pathogenises, this.addSchoolForm.value.Sourceone ).then((data: any) => {
    console.log("database saved")
    })

  }

  
}
