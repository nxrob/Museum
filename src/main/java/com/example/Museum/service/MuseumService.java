package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Art;

import java.util.List;

public interface MuseumService {


    List<Museum> findAll();

    Museum saveMuseum(Museum museum);

    void deleteMuseum(Museum museum);

    Museum findMuseumById(int id);

    List<MuseumDto> findAllDto();
    List<ArtDto> getWorksInMuseum(String museumName);
    List<Art> getWorksByArtistInMuseum(String museumName, String artistName);


}
