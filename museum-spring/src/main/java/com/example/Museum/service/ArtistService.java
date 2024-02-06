package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Artist;

import java.util.List;

public interface ArtistService {

    List<ArtistDto> findAllArtistsDtoNoRepertoire();
    List<Art> findObjectsByArtist(String name);

    String getMuseumWithMostWorksByArtist(String name);

    List<Art> findFirstAndLastObject(String name);

    Artist getArtistInfo(String name);
}
