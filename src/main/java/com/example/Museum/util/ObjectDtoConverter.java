package com.example.Museum.util;

import com.example.Museum.dto.ObjectDto;
import com.example.Museum.model.Object;

public class ObjectDtoConverter {

    public ObjectDto convertObjectToStandardDto(Object object) {

    return new ObjectDto(object.getId(), object.getTitle(), object.getArtist().getName(),
            object.getYearOf(), object.getMedium(), object.getMuseum().getName()
            + " (" + object.getMuseum().getLocation() + ")", object.getDescription(), object.getStyle());

    }

}
