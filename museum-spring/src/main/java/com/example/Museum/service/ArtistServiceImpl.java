package com.example.Museum.service;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.model.Art;
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
        return artistRepository.findAllArtistsDto();
    }

    @Override
    public List<Art> findObjectsByArtist(String name) {
        Artist artist = artistRepository.findByName(name);
        return artist.getRepertoire();
    }

    @Override
    public String getMuseumWithMostWorksByArtist(String name) {

        Artist artist = artistRepository.findByName(name);
        List<Museum> museums = museumService.findAll();
        int count = 0;
        Museum museumWithMostWorks = new Museum();

        for (Museum museum : museums) {
            int localCount = 0;
            List<Art> museumCollection = museum.getCollection();
            for (Art art : museumCollection) {
                if (art.getArtist().equals(artist)) {
                    localCount++;
                }
            }
            if (localCount > count) {
                count = localCount;
                museumWithMostWorks = museum;
            }
        }

        return "Currently, the " + museumWithMostWorks.getName() + " holds the most paintings by "
                + artist.getName() + " at a total of " + count + " work(s).";
    }

    @Override
    public List<Art> findFirstAndLastObject(String name) {
        Artist artist = artistRepository.findByName(name);
        List<Art> repertoire = artist.getRepertoire();

        Art oldestArt = new Art();
        oldestArt.setYearOf("9999");
        for (Art art : repertoire) {
            int yearMade = Integer.parseInt(art.getYearOf());
            if (yearMade < Integer.parseInt(oldestArt.getYearOf())) {
                oldestArt = art;
            }
        }

        Art newestArt = new Art();
        newestArt.setYearOf("0");
        for (Art art : repertoire) {
            int yearMade = Integer.parseInt(art.getYearOf());
            if (yearMade > Integer.parseInt(newestArt.getYearOf())) {
                newestArt = art;
            }
        }

        List<Art> oldestNewest = new ArrayList<>();
        oldestNewest.add(oldestArt);
        oldestNewest.add(newestArt);
        return oldestNewest;
    }

    @Override

    public void deleteArtist(int id) {
        artistRepository.deleteById(id);
    }

    @Override
    public List<ArtistDto> getArtistsByName(String name) {
        return artistRepository.getArtistsByName(name);

    }
}