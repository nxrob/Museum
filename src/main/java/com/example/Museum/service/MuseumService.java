package com.example.Museum.service;

import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MuseumService {

    List<Museum> findAll();
    List<Object> getWorksByArtistInMuseum(String museumName, String artistName);


}
