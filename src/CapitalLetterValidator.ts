// Custom validator for make sure that name begin with capital letter
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

const REGEX = /^[A-Z]/;
const MESSAGE = 'Text ($value) is does not start with capital letter!';

@ValidatorConstraint({name: 'capitalLetter', async: false})
export default class CapitalLetterValidator implements ValidatorConstraintInterface{
    public validate(text: string){
        return REGEX.test(text);
    }

    public message(args: ValidationArguments){
        return MESSAGE;
    }
}