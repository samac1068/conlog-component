import { Component, OnInit } from '@angular/core';
import {ConlogComponentService} from "../conlog-component.service";

@Component({
  selector: 'lib-conlog-dialog',
  templateUrl: './conlog-dialog.component.html',
  styleUrls: ['./conlog-dialog.component.css']
})
export class ConlogDialogComponent implements OnInit {

  constructor(public conlog: ConlogComponentService) { }

  ngOnInit(): void { }

  generateStringFromArrObj(arrObj: any): string {
    let str = "{ ";

    for (let item in arrObj) {
      str += item + ": " + this.isString(arrObj[item]) + ", "
    }

    return str.substring(0, str.length-2) + " }";
  }

  isString(value: any): string {
    if(typeof value === "string")
      return "'" + value + "'";
    else
      return value;
  }
}
