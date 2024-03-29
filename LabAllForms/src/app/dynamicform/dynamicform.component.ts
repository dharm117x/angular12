import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iform, IformControl } from '../interface/form-inteface';
import { RegisterFormConstants } from '../constants/form-constants';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {

 // @Input() form!: Iform;
  form= RegisterFormConstants as Iform;

  constructor(private fb: FormBuilder) { 
    
  }

  dynamicFormGroup: FormGroup=this.fb.group({},{updateOn:'submit'});

  ngOnInit(): void {
    if(this.form?.formControlls){
      let formGroup: any = {};

      this.form.formControlls.forEach((c:IformControl)=>{
        let  cValidators: any=[];
        if(c.validators){
          c.validators.forEach(v => {
            if(v.vName==='required') cValidators.push(Validators.required);
            if(v.vName==='email') cValidators.push(Validators.email);
            if(v.vName==='minlength') cValidators.push(Validators.minLength(v.minlength as number));
            
          });
        }
        formGroup[c.name]=[c.value || '', cValidators];
      });

      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit(){
    console.log(this.dynamicFormGroup.value)
  }

  resetForm(){
    this.dynamicFormGroup.reset();
  }

  getValidationError(c:IformControl): string{
    
    const myFC = this.dynamicFormGroup.get(c.name);
    let errorMsg = '';
    c.validators?.forEach(val=>{
      if(myFC?.hasError(val.vName as string)){
        console.log('Error', val.message);
        errorMsg = val.message as string;
      }
    });
    return errorMsg;
  }

  isValid(c:IformControl):boolean{
    const myFC = this.dynamicFormGroup.get(c.name);
    if(myFC?.touched && myFC.invalid)
      return false;
    return true;
  }
}
