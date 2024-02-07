package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.repository.MuseumRepository;
import com.example.Museum.util.MuseumDtoConverter;
import com.example.Museum.util.ArtDtoConverter;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class MuseumServiceImpl implements MuseumService {

    private MuseumRepository museumRepository;
    private ArtistRepository artistRepository;

    @Override
    public Museum saveMuseum(Museum museum) {
        return museumRepository.save(museum);
    }

    @Override
    public void deleteMuseum(Museum museum) {
        museumRepository.delete(museum);
    }

    @Override
    public Museum findMuseumById(int id) {
        return museumRepository.findById(id);
    }

    @Override
    public List<MuseumDto> findAllDto() {
        MuseumDtoConverter converter = new MuseumDtoConverter();

        List<Museum> tempList = museumRepository.findAll();
        List<MuseumDto> museums = new ArrayList<>();

        for (Museum museum : tempList) {
            museums.add(converter.convertToMuseumStandardDto(museum));
        }
        return museums;
    }

    @Override
    public List<Museum> findAll() {
        return museumRepository.findAll();
    }

    @Override
    public Museum getMuseum(String museumName) {
        return museumRepository.findByNameContains(museumName);
    }

    @Override
    public List<ArtDto> getMuseumWorks(String museumName) {
        ArtDtoConverter converter = new ArtDtoConverter();

        Museum museum = museumRepository.findByNameContains(museumName);

        List<Art> collectionTemp = museum.getCollection();
        List<ArtDto> collectionInDto = new ArrayList<>();

        for (Art art : collectionTemp) {
            collectionInDto.add(converter.convertArtToStandardDto(art));
        }
        return collectionInDto;
    }

    @Override
    public List<Art> getWorksByArtistInMuseum(String museumName, String artistName) {
        Artist artist = artistRepository.findByName(artistName);
        Museum museum = museumRepository.findByNameContains(museumName);
        List<Art> worksByArtistInMuseum = new ArrayList<>();
        List<Art> collection = museum.getCollection();
        for (Art art : collection) {
            if (art.getArtist().equals(artist)) {
                worksByArtistInMuseum.add(art);
            }
        }
        return worksByArtistInMuseum;
    }

    @Override
    public List<MuseumDto> findMuseumByName(String name) {
        return museumRepository.findMuseumByName(name);
    }

    public void deleteById(int id) {
        museumRepository.deleteById(id);

    }

    @Override
    public double getMuseumRating(String museumName) {
        DecimalFormat numberFormat = new DecimalFormat("#.0");
        return Double.parseDouble(numberFormat.format(museumRepository.getMuseumRating(museumName)));
    }

}
