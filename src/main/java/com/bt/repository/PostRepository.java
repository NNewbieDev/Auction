/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bt.repository;

import com.bt.pojo.Post;
import java.util.Date;
import java.util.List;

/**
 *
 * 
 */
public interface PostRepository {
    List<Post> getPosts();
    boolean addOrPost(Post p);
    Post getPostById(int id);
    boolean deletePost(int id);
    int countPost(Date date);

}
