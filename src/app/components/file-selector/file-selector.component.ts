import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetSourceService } from 'src/app/services/get-source.service';

@Component({
  selector: 'file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private getSourceService: GetSourceService
    ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      url: ''
    });
  }

  clicked() {
    this.getData(this.form.value.url);
  }

  getData(url): void {
    const trestt = this.getSourceService.getSource(url);
    console.log(trestt);
  }
}
