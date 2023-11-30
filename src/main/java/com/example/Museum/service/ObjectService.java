package com.example.Museum.service;

import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Object;

import java.util.List;

public interface ObjectService {

    List<ObjectDto> findAllDto();
    Object findByTitleIs(String title);
    List<ObjectDto> findByTitleContainsIgnoreCase(String filter);
    List<ObjectDto> findByArtistNameContainsIgnoreCase(String filter);
    List<ObjectDto> findByStyleContains(String style);

}
