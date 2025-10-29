package org.lab3.beans;
import jakarta.enterprise.context.ConversationScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Console;
import java.io.Serializable;

@Named("input")
@ConversationScoped
public class InputBean implements Serializable {
    private static final long serialVersionUID = 1L;

    private int x;
    private float y;
    private int r;
    private String testString;

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public String getTestString() {
        return testString;
    }

    public void submit() {
        testString = String.format("x: %d, y: %f, r:%d", x, y, r);
        System.out.println(testString);
    }
}
