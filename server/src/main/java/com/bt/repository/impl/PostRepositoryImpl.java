/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository.impl;

import com.bt.pojo.Post;
import com.bt.repository.PostRepository;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jca.support.LocalConnectionFactoryBean;
import static org.springframework.jdbc.core.JdbcOperationsExtensionsKt.query;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * 
 */
@Repository
@Transactional
public class PostRepositoryImpl implements PostRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Post> getPosts() {
        Session s = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = s.getCriteriaBuilder();
        CriteriaQuery<Post> q = b.createQuery(Post.class);

        Root rPost = q.from(Post.class);

        q.orderBy(b.desc(rPost.get("id")));
        Query query = s.createQuery(q);
        return query.getResultList();
    }

    @Override
    public boolean addOrPost(Post post) {
        Session s = factory.getObject().getCurrentSession();
        try {
            if (post.getId() == null) {
                s.save(post);
            } else {
                s.update(post);
            }
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public Post getPostById(int i) {
        Session s = factory.getObject().getCurrentSession();
        return s.get(Post.class, i);
    }

    @Override
    public boolean deletePost(int i) {
        Session s = factory.getObject().getCurrentSession();
        Post post = this.getPostById(i);
        try {
            s.delete(post);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public int countPost(Date date) {
        Session session = this.factory.getObject().getCurrentSession();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        // Lấy ngày, tháng và năm từ tham số date
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1; // Lưu ý: Tháng trong Calendar bắt đầu từ 0, nên cần cộng thêm 1.
        int day = calendar.get(Calendar.DAY_OF_MONTH);

        Query<Long> query = session.createQuery(
                "SELECT COUNT(*) FROM Post WHERE YEAR(createDate) = :year AND MONTH(createDate) = :month AND DAY(createDate) = :day", Long.class);

        query.setParameter("year", year);
        query.setParameter("month", month);
        query.setParameter("day", day);

        Long count = query.getSingleResult();
        return count.intValue();
    }

}
