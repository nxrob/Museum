package com.example.Museum.service;

import com.example.Museum.model.Object;

import java.util.List;

public interface ObjectService {

    List<Object> findAll();
    Object findByTitleIs(String title);
    List<Object> findByTitleContainsIgnoreCase(String filter);
    List<Object> findByArtistNameContainsIgnoreCase(String filter);

}
