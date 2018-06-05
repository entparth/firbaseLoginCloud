// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor() {
    console.log('Hello FirebaseProvider Provider');
  }

  addJob(typeName,classname, Phylum, Etiological, subclass, order, history, Source, Pathogenises, Sourceone) {
    return new Promise((resolve, reject) => {

      //every newly added job will have the status as true
      var dbRef = firebase.database().ref('/allDisease').push();
      var uniqueJobKey = dbRef.key;
      // Add Job data to the user
      dbRef.set({
        id: uniqueJobKey,
        DiseaseName: typeName,
        EtiologicalAgent: Etiological,
        Phylum: Phylum,
        class: classname,
        Subclass: subclass,
        order: order,
    

      }, () => {
        //add job globally 
        var dataRef = firebase.database().ref('/allDiseaseGrouped').child(uniqueJobKey);
        dataRef.set({
          id: uniqueJobKey,
          DiseaseName: typeName,
          EtiologicalAgent: Etiological,
          Phylum: Phylum,
          class: classname,
          Subclass: subclass,
          order: order,
        }, () => {
          resolve({
            success: true
          })
        });
      });
    });
  }


}
