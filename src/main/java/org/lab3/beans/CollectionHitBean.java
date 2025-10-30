package org.lab3.beans;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;
import org.lab3.Point;

import java.util.*;

@Named("collection")
@ApplicationScoped
public class CollectionHitBean {

    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("pointPU");

    public List<Point> getHitList() {
        var em = emf.createEntityManager();
        List<Point> points = new ArrayList<Point>();
        try {
            em.getTransaction().begin();
            points = em.createQuery("select p from Point p", Point.class).getResultList();
            em.getTransaction().commit();
        } finally {
            em.close();
        }

        return points;
    }

    public void savePoint(Point p) {
        var em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
}
