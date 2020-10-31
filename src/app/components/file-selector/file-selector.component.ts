import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder) { }


  ngOnInit(): void {
    //this.createForm();
    this.form = this.fb.group({
      url: ''
    });
  }


  clicked() {
    console.log(this.form.value);
  }
}
