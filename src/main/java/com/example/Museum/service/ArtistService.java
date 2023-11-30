package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Object;

import java.util.List;

public interface ArtistService {

    List<ArtistDto> findAllArtistsDtoNoRepertoire();
    List<Object> findObjectsByArtist(String name);

    String getMuseumWithMostWorksByArtist(String name);

    List<Object> findFirstAndLastObject(String name);

}
