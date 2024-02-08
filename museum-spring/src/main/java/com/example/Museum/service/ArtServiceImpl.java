package com.example.Museum.service;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import com.example.Museum.model.Artist;
import com.example.Museum.model.Museum;
import com.example.Museum.repository.ArtRepository;
import com.example.Museum.repository.ArtistRepository;
import com.example.Museum.repository.MuseumRepository;
import com.example.Museum.util.ArtDtoConverter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class ArtServiceImpl implements ArtService {

    private ArtRepository artRepository;
    private ArtistRepository artistRepository;
    private MuseumRepository museumRepository;

    @Override
    public List<ArtDto> findAllDto() {
        List<Art> objectsTemp = artRepository.findAll();
        log.debug("objectsTemp size: " + objectsTemp.size());
        List<ArtDto> objectsDto = new ArrayList<>();
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        int i = 0;
        for(Art art : objectsTemp) {
            objectsDto.add(artDtoConverter.convertArtToStandardDto(art));
            log.debug("CONVERTED to Art DTO: " + i);
            i++;
        }
        i = 0;
        return objectsDto;
    }

    @Override
    public Art findByTitleIs(String title) {
        return artRepository.findByTitleIs(title);
    }

    @Override
    public List<ArtDto> findByTitleContainsIgnoreCase(String filter) {
        List<Art> objectsTemp = artRepository.findByTitleContainsIgnoreCase(filter);
        List<ArtDto> objectsDto = new ArrayList<>();
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        for(Art art : objectsTemp) {
            objectsDto.add(artDtoConverter.convertArtToStandardDto(art));
        }
        return objectsDto;
    }

    @Override
    public List<ArtDto> findByArtistNameContainsIgnoreCase(String filter) {
        List<Art> objectsTemp = artRepository.findByArtistNameContainsIgnoreCase(filter);
        List<ArtDto> objectsDto = new ArrayList<>();
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        for(Art art : objectsTemp) {
            objectsDto.add(artDtoConverter.convertArtToStandardDto(art));
        }
        return objectsDto;
    }

    @Override
    public List<ArtDto> findByStyleContains(String style) {
        List<Art> objectsTemp = artRepository.findByStyleContains(style);
        List<ArtDto> objectsDto = new ArrayList<>();
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        for(Art art : objectsTemp) {
            objectsDto.add(artDtoConverter.convertArtToStandardDto(art));
        }
        return objectsDto;
    }

    @Override
    public ArtDto saveArt(ArtDto artDto) {
        Optional<Art> art = artRepository.findById(artDto.getId().intValue());
        art.ifPresent(value -> {
            BeanUtils.copyProperties(artDto,value);
            artRepository.save(value);
        });
        return artDto;
    }

    @Override
    public ArtDto saveArt(ArtDto artDto, Art art) {
        Artist artist = artistRepository.findByName(artDto.getArtistName());
        Museum museum = museumRepository.findById(Integer.parseInt(artDto.getLocationId()));

        log.debug(String.valueOf(artist));
        log.debug(String.valueOf(museum));
        BeanUtils.copyProperties(artDto,art);
        art.setArtist(artist);
        art.setMuseum(museum);
        art = artRepository.save(art);
        ArtDtoConverter artDtoConverter = new ArtDtoConverter();
        return artDtoConverter.convertArtToStandardDto(art);
    }

    @Override
    public void deleteById(int id) {
        artRepository.deleteById(id);
    }

    @Override
    public ArtDto getArtById(Long id) {
        return artRepository.getArtById(id);

    }

}