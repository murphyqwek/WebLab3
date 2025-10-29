package org.lab3.beans;
import jakarta.enterprise.context.ConversationScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import org.lab3.Point;

import java.io.Console;
import java.io.Serializable;

@Named("input")
@ConversationScoped
public class InputBean implements Serializable {
    private static final long serialVersionUID = 1L;

    @Inject
    private HitCheckBean hitCheckBean;

    @Inject
    private CollectionHitBean collectionHitBean;

    private int x;
    private float y;
    private int r = 1;
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
        testString = hitCheckBean.isHit(x, y, r) ? "Попал" : "Не попал";
        System.out.println(testString);
        boolean isHit = hitCheckBean.isHit(x, y, r);
        Point point = new Point(x, y, r, isHit, "bruh", 0);
        collectionHitBean.getHitList().add(point);
    }
}
