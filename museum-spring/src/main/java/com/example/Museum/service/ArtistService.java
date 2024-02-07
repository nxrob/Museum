package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;

import java.util.List;

public interface ArtistService {

    List<ArtistDto> findAllArtistsDtoNoRepertoire();
    List<Art> findObjectsByArtist(String name);

    String getMuseumWithMostWorksByArtist(String name);

    List<Art> findFirstAndLastObject(String name);

    Artist saveArtist(Artist artist);
}
