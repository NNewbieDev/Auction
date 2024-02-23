/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license

 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bt.repository;

import com.bt.pojo.Comment;
import java.util.List;
import java.util.Map;

/**
 *
 * @author admin
 */
public interface CommentRepository {
    List<Comment> getCommentByPostId(int id);
    Comment addComment(Comment comment);
    int countCmt(Integer postId);
}
