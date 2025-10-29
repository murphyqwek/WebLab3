package org.lab3.beans;
import jakarta.enterprise.context.ConversationScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import org.lab3.Point;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

    public void submit() {
        long startTime = System.nanoTime();
        String startTimeDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        boolean isHit = hitCheckBean.isHit(x, y, r);
        long endTime = System.nanoTime();
        Point point = new Point(x, y, r, isHit, startTimeDate, endTime - startTime);
        collectionHitBean.getHitList().add(point);
    }
}
