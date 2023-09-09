/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service.impl;

import com.bt.repository.LikeRepository;
import com.bt.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author vanli
 */
@Service
public class LikeServiceImpl implements LikeService{

    @Autowired
    private LikeRepository LikeRepository;
    @Override
    public int countLike(Integer postId) {
        return LikeRepository.countLike(postId);
      
    }
    
}
