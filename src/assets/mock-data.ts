
import { FormData } from '../app/componentes/login/form-data';

export const MockForm: FormData[] = [
  {
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter username',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    controlName: 'password',
    controlType: 'password',
    valueType: 'password',
    placeholder: 'Enter your password',
    validators: {
      required: true,
      minlength: 8
    }
  },

  // {
  //   controlName: 'Telephone',
  //   placeholder: 'Enter Phone',
  //   valueType: 'tel',
  //   controlType: 'text',
  //   validators: {
  //     required: true,
  //     minlength: 7,
  //     maxlength: 10
  //   }
  // },
  // {
  //   controlName: 'Email',
  //   valueType: 'email',
  //   placeholder: 'Enter email',
  //   controlType: 'text',
  //   validators: {
  //     required: true
  //   }
  // },
  {
    controlName: 'Gender',
    placeholder: 'Select gender',
    controlType: 'select',
    options: [{
      optionName: 'Male',
      value: 'male'
    }, {
      optionName: 'Female',
      value: 'female'
    }],
    validators: {
      required: true
    }
  },
  {
    controlName: 'Vehicle you own',
    placeholder: 'Select vehicle',
    controlType: 'radio',
    options: [{
      optionName: 'I have a bike',
      value: 'bike'
    }, {
      optionName: 'I have a car',
      value: 'car'
    }],
    validators: {
      required: true
    }
  }
];