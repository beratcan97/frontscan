import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CodeCheckerService } from '../../services/code/code-checker.service';

@Component({
  selector: 'app-code-line-tester',
  templateUrl: './code-line-tester.component.html',
  styleUrls: ['./code-line-tester.component.css']
})
export class CodeLineTesterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private codeChecker: CodeCheckerService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      url: ''
    });
  }

  checkCode() {
    const code = this.form.value.url;
    const codeSplitedOnLineEndings = code.split("\n");

    codeSplitedOnLineEndings.forEach(codeRow => {
      const hasComment = this.codeChecker.comment(codeRow);
      const hasVariableType = this.codeChecker.variableType(codeRow);

      if (hasComment) {
        console.log("Commented code not recomended in line: " + codeRow);
      }
    });
  }
}
