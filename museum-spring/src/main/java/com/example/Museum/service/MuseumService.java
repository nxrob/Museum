package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Guide;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Art;

import java.util.List;

public interface MuseumService {


    List<Museum> findAll();

    Museum saveMuseum(Museum museum);

    void deleteMuseum(Museum museum);

    Museum findMuseumById(int id);

    List<MuseumDto> findAllDto();
    Museum getMuseum(String museumName);

    List<ArtDto> getMuseumWorks(String museumName);

    List<Art> getWorksByArtistInMuseum(String museumName, String artistName);


    List<MuseumDto> findMuseumByName(String name);

    void deleteById(int id);

    double getMuseumRating(String museumName);

    Museum getMuseumById(Long id);
}
