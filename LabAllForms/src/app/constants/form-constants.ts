import { Iform } from "../interface/form-inteface";

export const RegisterFormConstants:Iform = {
    title: "Dyanmic Form",
    saveBtnLevel: "Submit",
    resetBtnLevel: "Reset",
    formControlls: [
    {
        "name": "firstName",
        "level": "First Name:",
        "value": "",
        "class": "",
        "placeholder": "",
        "type": "text",
        "validators": [
            {
                "vName": "required",
                "required": true,
                "message": "firstName is required"
            },
            {
                "vName": "minlength",
                "minlength": 5,
                "message": "Min lenght should be 5"
            }
        ]
    },
    {
        "name": "email",
        "level": "Email",
        "value": "",
        "class": "col-mod-4",
        "placeholder": "",
        "type": "email",
        "validators": [
            {
                "vName": "required",
                "required": true,
                "message": "Email is required"
            },
            {
                "vName": "email",
                "email": "email",
                "message": "Email is not valid"
            }
        ]
    },
    {
        "name": "gender",
        "level": "Gender",
        "value": "",
        "class": "",
        "placeholder": "",
        "type": "radio",
        "radioOptions": [
            "Male", "Female"
        ],
        "validators": [
            {
                "vName": "required",
                "required": true,
                "message": "Gender is required"
            }
        ]
    },
    {
        "name": "skill",
        "level": "Select skill level?",
        "value": "",
        "class": "col-mod-4",
        "placeholder": "",
        "type": "select",
        "options": [
            {
                "id":'1',
                "value":"Level-1"
            },
            {
                "id":'2',
                "value":"Level-2"
            },
            {
                "id":'3',
                "value":"Level-3"
            }

        ],
        "validators": [
            {
                "vName": "required",
                "required": true,
                "message": "Skill is required"
            }
        ]
    },
    {
        "name": "dob",
        "level": "Date of Birth",
        "value": "",
        "class": "",
        "placeholder": "",
        "type": "date",
        "validators": [
            {
                "vName": "required",
                "required": true,
                "message": "DOB is required"
            }
        ]
    }

]

}