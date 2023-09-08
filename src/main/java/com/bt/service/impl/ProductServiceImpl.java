/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.service.impl;

import com.bt.pojo.Product;
import com.bt.repository.ProductRepository;
import com.bt.service.ProductService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author admin
 */
@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepo;

    @Override
    public List<Product> getProducts(Map<String, String> param) {
       return this.productRepo.getProducts(param);
    }

   
}
