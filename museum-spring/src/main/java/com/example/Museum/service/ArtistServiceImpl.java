package com.example.Museum.service;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Art;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.util.ArtDtoConverter;
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
        return artistRepository.findAllArtistsDto();
    }

    @Override
    public List<ArtDto> findObjectsByArtist(String name) {
        Artist artist = artistRepository.findByName(name);
        List<Art> repertoireTemp = artist.getRepertoire();
        List<ArtDto> repertoire = new ArrayList<>();
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        for (Art art : repertoireTemp) {
            repertoire.add(artDtoConverter.convertArtToStandardDto(art));
        }
        return repertoire;
    }

    @Override
    public Museum getMuseumWithMostWorksByArtist(String name) {

        Artist artist = artistRepository.findByName(name);
        List<Museum> museums = museumService.findAll();
        int count = 0;
        Museum museumWithMostWorks = new Museum();

        for(Museum museum : museums) {
            int localCount = 0;
            List<Art> museumCollection = museum.getCollection();
            for(Art art : museumCollection) {
                if(art.getArtist().equals(artist)) {
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

    @Override
    public List<Art> findFirstAndLastObject(String name) {
        Artist artist = artistRepository.findByName(name);
        List<Art> repertoire = artist.getRepertoire();

//        Art oldestArt = new Art();
//        oldestArt.setYearOf("9999");
//        for(Art art : repertoire) {
//            int yearMade = Integer.parseInt(art.getYearOf());
//            if(yearMade < Integer.parseInt(oldestArt.getYearOf())) {
//                oldestArt = art;
//            }
//        }
//
//        Art newestArt = new Art();
//        newestArt.setYearOf("0");
//        for(Art art : repertoire) {
//            int yearMade = Integer.parseInt(art.getYearOf());
//            if(yearMade > Integer.parseInt(newestArt.getYearOf())) {
//                newestArt = art;
//            }


        List<Art> oldestNewest = new ArrayList<>();
//        oldestNewest.add(oldestArt);
//        oldestNewest.add(newestArt);
        return oldestNewest;
    }

    @Override
    public Artist saveArtist(Artist artist) {
        return artistRepository.save(artist);
    }
}