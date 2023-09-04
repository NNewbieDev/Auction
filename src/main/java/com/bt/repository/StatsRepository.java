/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bt.repository;

import java.util.List;

/**
 *
 * @author admin
 */
public interface StatsRepository {
     List<Object[]> countProduct();
     List<Object[]> countProductByLike();
     List<Object[]> countProductByComment();
}
