package org.lab3.convertation;

import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.convert.Converter;
import jakarta.faces.convert.ConverterException;
import jakarta.faces.convert.FacesConverter;

@FacesConverter("yConverter")
public class YConverter implements Converter<Float> {
    @Override
    public Float getAsObject(FacesContext facesContext, UIComponent uiComponent, String s) {
        try {
            return Float.parseFloat(s);
        } catch (Exception e) {
            throw new ConverterException(new FacesMessage(FacesMessage.SEVERITY_ERROR,
                    "Ошибка формата",
                    "Значение y должно быть числом"));
        }
    }

    @Override
    public String getAsString(FacesContext facesContext, UIComponent uiComponent, Float aFloat) {
        return aFloat.toString();
    }
}
