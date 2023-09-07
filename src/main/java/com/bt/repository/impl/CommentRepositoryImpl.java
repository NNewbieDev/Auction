/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository.impl;

import com.bt.repository.CommentRepository;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author vanli
 */
@Repository
@Transactional
public class CommentRepositoryImpl implements CommentRepository{

    @Autowired
    private LocalSessionFactoryBean factory;
    @Override
    public int countCmt(Integer postId) {
        Session session = factory.getObject().getCurrentSession();

        // Sử dụng HQL (Hibernate Query Language) để truy vấn số lượt "like" cho một postId cụ thể
        String hql = "SELECT COUNT(l) FROM Comment l WHERE l.postId.id = :postId";
        Query<Long> query = session.createQuery(hql, Long.class);
        query.setParameter("postId", postId);

        Long cmtCount = query.uniqueResult();

        // Trả về số lượt "like" dưới dạng số nguyên
        return cmtCount != null ? cmtCount.intValue() : 0;
    }
    
    
}
