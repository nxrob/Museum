package com.example.Museum.util;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Museum;

public class MuseumDtoConverter {

    public MuseumDto convertToMuseumStandardDto(Museum museum) {
        return new MuseumDto(museum.getName(), museum.getLocation(), museum.getCollection().size());
    }

//    public MuseumDto convertToMuseumDtoWithNumberOfSpecificPaintings(Museum museum, int numberOfPaintings) {//Workaround so that collectionSize wouldn't appear in the JSON when finding the museum with most works by X artist
//        return new MuseumDto(museum.getName(), museum.getLocation(), numberOfPaintings, true); //true here is a functional but dummy boolean
//    }

}
