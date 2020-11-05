import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLineTesterComponent } from './code-line-tester.component';

describe('CodeLineTesterComponent', () => {
  let component: CodeLineTesterComponent;
  let fixture: ComponentFixture<CodeLineTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLineTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLineTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
