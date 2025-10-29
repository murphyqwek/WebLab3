package org.lab3.validation;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.ValidatorException;

@FacesValidator("xValidation")
public class XValidation implements Validator<Integer> {
    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Integer integer) throws ValidatorException {
        if (integer == null) {
            return;
        }

        if (integer < -5 || integer > 5) {
            FacesMessage msg = new FacesMessage(
                    FacesMessage.SEVERITY_ERROR,
                    "Ошибка ввода",
                    "Значение x должно быть в диапазоне от -3 до 3"
            );
            throw new ValidatorException(msg);
        }
    }
}