package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;

import java.util.List;

public interface MuseumService {


    List<Museum> findAll();
    List<MuseumDto> findAllDto();
    List<ObjectDto> getWorksInMuseum(String museumName);
    List<Object> getWorksByArtistInMuseum(String museumName, String artistName);


}
