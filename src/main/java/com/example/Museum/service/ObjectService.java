package com.example.Museum.service;

import com.example.Museum.model.Object;

import java.util.List;

public interface ObjectService {

    List<Object> findAll();
    List<Object> findByTitleContains(String filter);

}
