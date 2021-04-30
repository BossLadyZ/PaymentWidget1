import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import  { EligibilityStatus } from './stepForm/EligibilityStatus';
import { PersonalDetails } from './stepForm/PersonalDetails';
import { EmploymentDetails } from './stepForm/EmploymentDetails';
import {Submit} from './stepForm/Submit';

const defaultData = {
        stateoforigin: "",
        localGovt: "",
        employmentStatuses: [
            { value: 'employed',
            label: 'employed' } ,
            {value: 'Unemployed',
            label: 'unemployed' },
        ] ,
        monthlyIncome: "",
        BVN: "",
        DateofBirth: "",
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        genders:  [
            { value: 'male',
            label: 'male' } ,
            {value: 'female',
            label: 'female' },
        ] ,
        resStatuses: [
            { value: 'owner',
            label: 'owner' } ,
            {value: 'renting',
            label: 'renting' },
        ] ,
        dateMovedin: '',
        maritalStatuses: [
            { value: 'single',
            label: 'single' } ,
            {value: 'married',
            label: 'married' },
        ] ,
        levelsofEducation: [
            { value: 'primary',
            label: 'Primary' } ,
            {value: 'secondary',
            label: 'Secondary' },
            {value: 'tertiary',
            label: 'Tertiary' },
        ] ,
        employerName: '',
        empSectors:[
            { value: 'finance',
            label: 'Finance' } ,
            {value: 'banking',
            label: 'Banking' },
            {value: 'charity',
            label: 'Charity' },
        ] ,
        empStart: '',
        offAdd: '',
        workEmail: '' 
};

const steps = [
    { id: "eligibility" },
    { id: "personalDetails"},
    { id: "employmentDetails"},
    { id: "submit"}
]

export const MultiStepForm = () => {
    const [formData, setForm ] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    });

    const props = { formData, setForm, navigation }

    switch(step.id) {
        case "eligibility":
            return <EligibilityStatus { ...props} />;
        case "personalDetails":
                return <PersonalDetails { ...props} />;
        case "employmentDetails":
            return <EmploymentDetails { ...props}/>;
        case "submit":
                return <Submit { ...props} />;
    }


    return (
        <div>
            <h1>Multi step Form</h1>
        </div>
    )
}
