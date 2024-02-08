package com.example.Museum.service;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Painting;

import java.util.List;

public interface ArtService {

    List<ArtDto> findAllDto();
    Art findByTitleIs(String title);
    List<ArtDto> findByTitleContainsIgnoreCase(String filter);
    List<ArtDto> findByArtistNameContainsIgnoreCase(String filter);
    List<ArtDto> findByStyleContains(String style);

    ArtDto saveArt(ArtDto art);

    ArtDto saveArt(ArtDto artDto, Art art);


    void deleteById(int id);

    ArtDto getArtById(Long id);

}
