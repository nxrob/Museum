package com.example.Museum.util;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Museum;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MuseumDtoConverter {

    public MuseumDto convertToMuseumStandardDto(Museum museum) {
        return new MuseumDto(museum);
    }

}
