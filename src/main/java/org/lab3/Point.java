package org.lab3;

public class Point {
    private int x;
    private float y;
    private int r;
    private boolean hit;
    private String startTime;
    private long executionTime;

    public Point(int x, float y, int r, boolean hit, String startTime, long executionTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.startTime = startTime;
        this.executionTime = executionTime;
    }

    public int getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public int getR() {
        return r;
    }

    public boolean isHit() {
        return hit;
    }

    public String getStartTime() {
        return startTime;
    }

    public long getExecutionTime() {
        return executionTime;
    }
}
