import {onChangeValidationRules, submitValidationRules} from "../Constants/validationRules";

export const simpleForm = {
    properties: {
        title: 'Simple Form',
        action: 'submit',
        declineBrowserValidation: true
    },
    fields: {
        inputs: [
            {
                id: 'initials',
                name: 'initials',
                type: 'text',
                title: 'Фамилия Имя Отчество',
                placeholder: 'Иванов Иван Иванович',
                validation: {
                    [submitValidationRules.isEmpty]: true,
                    [submitValidationRules.maxLength]: 50,
                    [submitValidationRules.minWords]: 3,
                },
                maskValidation: onChangeValidationRules.initials
            },
            {
                id: 'phone',
                name: 'phone',
                type: 'phone',
                title: 'Телефон',
                placeholder: '+7(999) 999 99 99',
                validation: {
                    [submitValidationRules.isEmpty]: true,
                    [submitValidationRules.regular]: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                },
                maskValidation: onChangeValidationRules.phoneNumber
            },
            {
                id: 'email',
                name: 'email',
                type: 'text',
                title: 'Email',
                placeholder: 'example@mail.com',
                validation: {
                    [submitValidationRules.isEmpty]: true,
                    [submitValidationRules.regular]: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
                maskValidation: onChangeValidationRules.email
            },
            {
                id: 'date',
                name: 'date',
                type: 'text',
                title: 'Дата',
                placeholder: '24.07.1981',
                validation: {
                    [submitValidationRules.isEmpty]: true,
                    [submitValidationRules.regular]: /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                    [submitValidationRules.actualDate]: true,
                },
                maskValidation: onChangeValidationRules.date
            },
        ],
        checkboxes: [],
        radios: [],
        textarea: []
    },
    buttons: []
}
