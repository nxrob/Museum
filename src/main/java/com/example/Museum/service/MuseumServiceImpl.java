package com.example.Museum.service;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@AllArgsConstructor
public class MuseumServiceImpl implements MuseumService {

    private MuseumRepository museumRepository;
    private ArtistRepository artistRepository;

    @Override
    public List<Museum> findAll() {
        List<Museum> museums = new ArrayList<>();
        Iterable<Museum> museumsItr = museumRepository.findAll();
        museumsItr.forEach(museums::add);
        return museums;
    }

    @Override
    public List<Object> getWorksByArtistInMuseum(String museumName, String artistName) {
        Artist artist = artistRepository.findByName(artistName);
        Museum museum = museumRepository.findByName(museumName);
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
