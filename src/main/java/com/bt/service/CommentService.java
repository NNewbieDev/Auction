/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service;

import com.bt.pojo.Comment;
import java.util.List;

/**
 *
 * @author vanli
 */
public interface CommentService {
    List<Comment> getCommentByPostId(int id);
    Comment addComment(Comment comment);
    int countCmt(Integer postId);
}
