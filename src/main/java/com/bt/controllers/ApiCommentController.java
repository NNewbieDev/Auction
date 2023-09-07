/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.controllers;

import com.bt.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author vanli
 */
@RestController
@RequestMapping("/api")
public class ApiCommentController {
    @Autowired
    private CommentService commentService;
    
    @GetMapping("/posts/cmt/{postId}")
    @CrossOrigin
    public ResponseEntity<Integer> countCmt(@PathVariable(value = "postId") Integer postId) {
        int cmtCount = this.commentService.countCmt(postId);
        return new ResponseEntity<>(cmtCount, HttpStatus.OK);
    }
    
}
