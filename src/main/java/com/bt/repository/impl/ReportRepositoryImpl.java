/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository.impl;

import com.bt.pojo.Post;
import com.bt.pojo.Report;
import com.bt.pojo.User;
import com.bt.repository.ReportRepository;
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
public class ReportRepositoryImpl implements ReportRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public Report addReport(Report report) {
        Session s = factory.getObject().getCurrentSession();
       
        s.save(report);
        return report;
    }

}
