/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository.impl;

import com.bt.pojo.Comment;
import com.bt.pojo.Product;
import com.bt.repository.CommentRepository;
import java.util.List;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author admin
 */
@Repository
@Transactional
public class CommentRepositoryImpl implements CommentRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Comment> getCommentByPostId(int id) {

        Session s = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = s.getCriteriaBuilder();
        CriteriaQuery<Comment> q = b.createQuery(Comment.class);
        Root root = q.from(Comment.class);

        q.where(b.equal(root.get("postId").get("id"), id));
        q.orderBy(b.desc(root.get("id")));

        org.hibernate.query.Query query = s.createQuery(q);
        return query.getResultList();
    }

    @Override
    public Comment addComment(Comment cmnt) {
       Session s = factory.getObject().getCurrentSession();
       s.save(cmnt);
       return cmnt;
    }

}
