/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service.impl;

import com.bt.pojo.Comment;
import com.bt.repository.CommentRepository;
import com.bt.service.CommentService;
import java.util.List;
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
        return cmt.countCmt(postId);
    }

    @Override
    public List<Comment> getCommentByPostId(int id) {
        return cmt.getCommentByPostId(id);
    }

    @Override
    public Comment addComment(Comment comment) {
        return cmt.addComment(comment);
    }
    
    
}
