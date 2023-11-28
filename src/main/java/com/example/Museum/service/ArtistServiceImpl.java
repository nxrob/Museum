package com.example.Museum.service;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ArtistServiceImpl implements ArtistService {

    private ArtistRepository artistRepository;
    private MuseumService museumService;

    @Override
    public List<Artist> findAll() {
        List<Artist> artists = new ArrayList<>();
        Iterable<Artist> artistsItr = artistRepository.findAll();
        artistsItr.forEach(artists::add);
        return artists;
    }

    @Override
    public List<Object> findObjectsByArtist(String name) {
        Artist artist = artistRepository.findByName(name);
        return artist.getRepertoire();
    }

    @Override
    public Museum getMuseumWithMostWorksByArtist(String name) {
        Artist artist = artistRepository.findByName(name);
        List<Museum> museums = museumService.findAll();
        int count = 0;
        Museum museumWithMostWorks = null;
        for(Museum museum : museums) {
            int localCount = 0;
            List<Object> museumCollection = museum.getCollection();
            for(Object object : museumCollection) {
                if(object.getArtist().equals(artist)) {
                    localCount++;
                }
            }
            if(localCount > count) {
                count = localCount;
                museumWithMostWorks = museum;
            }
        }
        return museumWithMostWorks;
    }
}