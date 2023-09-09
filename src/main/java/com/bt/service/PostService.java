/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bt.service;

import com.bt.pojo.Post;
import java.util.Date;
import java.util.List;

/**
 *
 * @author admin
 */
public interface PostService {
    List<Post> getPost();
    int countPost(Date date);
}
