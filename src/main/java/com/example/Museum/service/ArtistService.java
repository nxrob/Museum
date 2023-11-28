package com.example.Museum.service;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;

import java.util.List;

public interface ArtistService {

    List<Artist> findAll();
    List<Object> findObjectsByArtist(String name);
    Museum getMuseumWithMostWorksByArtist(String name);

}
