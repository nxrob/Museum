package com.example.Museum.service;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;

import java.util.List;

public interface ArtService {

    List<ArtDto> findAllDto();
    Art findByTitleIs(String title);
    List<ArtDto> findByTitleContainsIgnoreCase(String filter);
    List<ArtDto> findByArtistNameContainsIgnoreCase(String filter);
    List<ArtDto> findByStyleContains(String style);

    void deleteArt(int id);
}
