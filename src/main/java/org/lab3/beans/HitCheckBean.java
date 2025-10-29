package org.lab3.beans;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("hit")
@ApplicationScoped
public class HitCheckBean {
    public boolean isHit(int x, float y, int r) {
        return isHitCircle(x,y,r) || isHitRectangle(x,y,r) || isHitTriangle(x,y,r);
    }

    private boolean isHitTriangle(int x, float y, int r) {
        if(x <= 0 && y >= 0) {
            return y <= r + 2 * x;
        }

        return false;
    }

    private boolean isHitRectangle(int x, float y, int r) {
        return (x >= 0 && x <= r) && (y <= 0 && y >= -r);
    }

    private boolean isHitCircle(int x, float y, int r) {
        return x*x + y*y <= r*r && x <= 0 && y <= 0;
    }
}
