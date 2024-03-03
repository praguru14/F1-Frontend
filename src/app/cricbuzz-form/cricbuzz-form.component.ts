import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CricketData } from '../cricket-data.model';

@Component({
  selector: 'app-cricbuzz-form',
  templateUrl: './cricbuzz-form.component.html',
  styleUrls: ['./cricbuzz-form.component.css']
})
export class CricbuzzFormComponent implements OnInit {
  cricbuzzForm: any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.cricbuzzForm = this.formBuilder.group({
      title: ['', Validators.required],
      update: ['', Validators.required],
      livescore: ['', Validators.required],
      runrate: ['', Validators.required],
      batterone: ['', Validators.required],
      batsmanonerun: ['', Validators.required],
      batsmanoneball: ['', Validators.required],
      batsmanonesr: ['', Validators.required],
      battertwo: ['', Validators.required],
      batsmantworun: ['', Validators.required],
      batsmantwoball: ['', Validators.required],
      batsmantwosr: ['', Validators.required],
      bowlerone: ['', Validators.required],
      bowleroneover: ['', Validators.required],
      bowleronerun: ['', Validators.required],
      bowleronewickets: ['', Validators.required],
      bowleroneeconomy: ['', Validators.required],
      bowlertwo: ['', Validators.required],
      bowlertwoover: ['', Validators.required],
      bowlertworun: ['', Validators.required],
      bowlertwowickets: ['', Validators.required],
      bowlertwoeconomy: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.cricbuzzForm.valid) {
      console.log(this.cricbuzzForm.value);
      // You can perform further actions here, such as sending the form data to a server
    } else {
      console.error('Form is invalid');
    }
  }
}
