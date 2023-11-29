package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.repository.MuseumRepository;
import com.example.Museum.util.MuseumDtoConverter;
import com.example.Museum.util.ObjectDtoConverter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class MuseumServiceImpl implements MuseumService {

    private MuseumRepository museumRepository;
    private ArtistRepository artistRepository;

    @Override
    public List<MuseumDto> findAllDto() {
        MuseumDtoConverter converter = new MuseumDtoConverter();

        List<Museum> tempList = museumRepository.findAll();
        List<MuseumDto> museums = new ArrayList<>();

        for(Museum museum : tempList) {
            museums.add(converter.convertToMuseumStandardDto(museum));
        }
        return museums;
    }

    @Override
    public List<Museum> findAll() {
        return museumRepository.findAll();
    }

    @Override
    public List<ObjectDto> getWorksInMuseum(String museumName) {
        ObjectDtoConverter converter = new ObjectDtoConverter();

        Museum museum = museumRepository.findByNameContains(museumName);

        List<Object> collectionTemp = museum.getCollection();
        List<ObjectDto> collectionInDto = new ArrayList<>();

        for(Object object : collectionTemp) {
            collectionInDto.add(converter.convertObjectToStandardDto(object));
        }
        return collectionInDto;
    }

    @Override
    public List<Object> getWorksByArtistInMuseum(String museumName, String artistName) {
        Artist artist = artistRepository.findByName(artistName);
        Museum museum = museumRepository.findByNameContains(museumName);
        List<Object> worksByArtistInMuseum = new ArrayList<>();
        List<Object> collection = museum.getCollection();
        for(Object object : collection) {
            if(object.getArtist().equals(artist)) {
                worksByArtistInMuseum.add(object);
            }
        }
        return worksByArtistInMuseum;
    }

}
