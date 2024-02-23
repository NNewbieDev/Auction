/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service.impl;

import com.bt.pojo.Post;
import com.bt.repository.PostRepository;
import com.bt.repository.UserRepository;
import com.bt.service.PostService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author admin
 */
@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepo;

    @Override
    public List<Post> getPost() {
        return this.postRepo.getPosts();
    }

    @Override
    public int countPost(Date date) {
        return postRepo.countPost(date);
    }

}
