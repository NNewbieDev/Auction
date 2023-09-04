/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bt.repository;

import com.bt.pojo.User;
import java.util.List;

/**
 *
 * @author admin
 */

public interface UserRepository {
    List<User> getUsers();
}
