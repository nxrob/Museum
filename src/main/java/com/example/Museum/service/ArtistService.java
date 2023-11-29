package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;

import java.util.List;

public interface ArtistService {

    List<Artist> findAll();
    List<ArtistDto> findAllArtistsDto();
    List<ArtistDto> findAllArtistsDtoNoRepertoire();
    List<Object> findObjectsByArtist(String name);

    List<ArtistDto> findArtistDtoByName(String name);

    String getMuseumWithMostWorksByArtist(String name);

    List<Object> findFirstAndLastObject(String name);

}
