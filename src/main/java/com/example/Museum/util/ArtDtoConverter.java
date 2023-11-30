package com.example.Museum.util;

import com.example.Museum.dto.ArtDto;
import com.example.Museum.model.Art;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ArtDtoConverter {

    public ArtDto convertArtToStandardDto(Art art) {
        log.debug("... converting <Art> object to <ArtDto> ...");
        return new ArtDto(art);
    }

}
