import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  UntypedFormArray,
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { DbService } from '../db/db.service';

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.scss'],
})
export class AddSchemeComponent implements OnInit {
  @ViewChild('multipleField') multipleField: any;

  schemeFeature = new FormArray([new FormControl('', Validators.required)]);
  schemeBeneficiaries = new FormArray([
    new FormControl('', Validators.required),
  ]);
  schemeEligibility = new FormArray([new FormControl('', Validators.required)]);
  schemeBenefits = new FormArray([new FormControl('', Validators.required)]);
  schemeAdditionalBenefits = new FormArray([
    new FormControl('', Validators.required),
  ]);
  schemeProcedure = new FormArray([new FormControl('', Validators.required)]);
  schemeProcedureNote = new FormArray([
    new FormControl('', Validators.required),
  ]);
  schemeDocuments = new FormArray([new FormControl('', Validators.required)]);
  schemeDocumentsNote = new FormArray([
    new FormControl('', Validators.required),
  ]);
  public submitForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private ds: DbService) {}

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      schemeName: ['', Validators.required],
      description: ['', Validators.required],
      launchedBy: ['', Validators.required],
      launchedOn: ['', Validators.required],
      schemeId: ['', Validators.required],
      feature: this.schemeFeature,
      category: ['', Validators.required],
      schemeType: ['', Validators.required],
      beneficiaries: this.schemeBeneficiaries,
      eligibility: this.schemeEligibility,
      schemeBenefits: this.fb.group({
        benefits: this.schemeBenefits,
        category: this.schemeAdditionalBenefits,
      }),

      applicationProcedure: this.fb.group({
        procedure: this.schemeProcedure,
        note: this.schemeProcedureNote,
      }),

      documentsRequired: this.fb.group({
        documents: this.schemeDocuments,
        note: this.schemeDocumentsNote,
      }),
      link: ['', Validators.required],
    });
  }

  createField() {
    this.schemeFeature.push(new FormControl('', Validators.required));
  }

  createFieldBeneficiary() {
    this.schemeBeneficiaries.push(new FormControl('', Validators.required));
  }

  createFieldEligibility() {
    this.schemeEligibility.push(new FormControl('', Validators.required));
  }

  createFieldBenefits() {
    this.schemeBenefits.push(new FormControl('', Validators.required));
  }

  createFieldBenefitsAdditional() {
    this.schemeAdditionalBenefits.push(
      new FormControl('', Validators.required)
    );
  }

  createFieldProcedureNote() {
    this.schemeProcedureNote.push(new FormControl('', Validators.required));
  }

  createFieldProcedure() {
    this.schemeProcedure.push(new FormControl('', Validators.required));
  }

  createFieldDocumentNote() {
    this.schemeDocumentsNote.push(new FormControl('', Validators.required));
  }

  createFieldDocuments() {
    this.schemeDocuments.push(new FormControl('', Validators.required));
  }

  submit() {
    const data = this.submitForm.value;
    console.log(data);
    this.ds.addScheme(data);
  }

  removeFieldFeature(i: any) {
    this.schemeFeature.removeAt(i);
  }

  removeFieldBeneficiary(i: any) {
    this.schemeBeneficiaries.removeAt(i);
  }

  removeFieldEligibility(i: any) {
    this.schemeEligibility.removeAt(i);
  }
  removeFieldBenefits(i: any) {
    this.schemeBenefits.removeAt(i);
  }
  removeFieldAdditionalBenefits(i: any) {
    this.schemeAdditionalBenefits.removeAt(i);
  }
  removeFieldProcedureNote(i: any) {
    this.schemeProcedureNote.removeAt(i);
  }
  removeFieldProcedure(i: any) {
    this.schemeProcedure.removeAt(i);
  }
  removeFieldDocumentsNote(i: any) {
    this.schemeDocumentsNote.removeAt(i);
  }
  removeFieldDocuments(i: any) {
    this.schemeDocuments.removeAt(i);
  }
}
