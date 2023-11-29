package com.example.Museum.util;

import com.example.Museum.dto.ArtistDto;
import com.example.Museum.model.Artist;

public class ArtistDtoConverter {

    public ArtistDto convertArtistToNameOnly(Artist artist) {
        return new ArtistDto(artist.getId(), artist.getName());
    }

}