package org.lab3.validation;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.ValidatorException;

@FacesValidator("yValidation")
public class YValidation implements Validator<Float> {
    @Override
    public void validate(FacesContext context, UIComponent component, Float value)
            throws ValidatorException {

        if (value == null) {
            return;
        }

        String stringNumber = value.toString();

        stringNumber = stringNumber.replace(".", ",");

        if(stringNumber.split(",")[1].length() > 3){
            throw new ValidatorException(new FacesMessage(FacesMessage.SEVERITY_ERROR,
                    "Ошибка ввода",
                    "Значение y может иметь не более трех знаков после запятой"));
        }

        if (value < -5 || value > 3) {
            throw new ValidatorException(new FacesMessage(FacesMessage.SEVERITY_ERROR,
                    "Ошибка ввода",
                    "Значение y может быть в диапазоне от -5 до 3"));
        }
    }
}