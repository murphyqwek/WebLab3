package org.lab3.beans;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import org.lab3.Point;

import java.util.ArrayList;

@Named("collection")
@ApplicationScoped
public class CollectionHitBean {
    private ArrayList<Point> hitList = new ArrayList();


    public ArrayList<Point> getHitList() {
        return hitList;
    }
}
