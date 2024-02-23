/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository.impl;

import com.bt.repository.LikeRepository;
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
public class LikeRepositoryImpl implements LikeRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public int countLike(Integer postId) {
        Session session = factory.getObject().getCurrentSession();

        // Sử dụng HQL (Hibernate Query Language) để truy vấn số lượt "like" cho một postId cụ thể
        String hql = "SELECT COUNT(l) FROM Likes l WHERE l.postId.id = :postId";
        Query<Long> query = session.createQuery(hql, Long.class);
        query.setParameter("postId", postId);

        Long likeCount = query.uniqueResult();

        // Trả về số lượt "like" dưới dạng số nguyên
        return likeCount != null ? likeCount.intValue() : 0;
    }

}
