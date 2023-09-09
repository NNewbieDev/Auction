/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service.impl;

import com.bt.repository.CommentRepository;
import com.bt.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author vanli
 */
@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepository cmt;
    @Override
    public int countCmt(Integer postId) {
//       return cmt.countCmt(postId);
return 0;
    }
    
    
}
