package org.lab3.validation;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.ValidatorException;

@FacesValidator("rValidation")
public class RValidation implements Validator<Integer> {
    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Integer integer) throws ValidatorException {
        if (integer == null) {
            return;
        }

        if (integer < 1 || integer > 5) {
            FacesMessage msg = new FacesMessage(
                    FacesMessage.SEVERITY_ERROR,
                    "Ошибка ввода",
                    "Значение r должно быть в диапазоне от 1 до 5"
            );
            throw new ValidatorException(msg);
        }
    }
}