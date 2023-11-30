package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Object;
import com.example.Museum.repository.ArtistRepository;
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
    public List<ArtistDto> findAllArtistsDtoNoRepertoire() {
        return artistRepository.findAllArtistsDtoNoRepertoire();
    }

    @Override
    public List<Object> findObjectsByArtist(String name) {
        Artist artist = artistRepository.findByName(name);
        return artist.getRepertoire();
    }

    @Override
    public String getMuseumWithMostWorksByArtist(String name) {

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

        return "Currently, the " + museumWithMostWorks.getName() + " holds the most paintings by "
                + artist.getName() + " at a total of " + count + " work(s).";
    }

    @Override
    public List<Object> findFirstAndLastObject(String name) {
        Artist artist = artistRepository.findByName(name);
        List<Object> repertoire = artist.getRepertoire();

        Object oldestObject = new Object();
        oldestObject.setYearOf("9999");
        for(Object object : repertoire) {
            int yearMade = Integer.parseInt(object.getYearOf());
            if(yearMade < Integer.parseInt(oldestObject.getYearOf())) {
                oldestObject = object;
            }
        }

        Object newestObject = new Object();
        newestObject.setYearOf("0");
        for(Object object : repertoire) {
            int yearMade = Integer.parseInt(object.getYearOf());
            if(yearMade > Integer.parseInt(newestObject.getYearOf())) {
                newestObject = object;
            }
        }

        List<Object> oldestNewest = new ArrayList<>();
        oldestNewest.add(oldestObject);
        oldestNewest.add(newestObject);
        return oldestNewest;
    }
}