package com.example.Museum.service;

import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Guide;

import java.util.List;

public interface GuideService {
    List<Guide> findAll();

    List<MuseumDto> getMuseumsInGuide(String name);

    List<Guide> getGuidesMentioningMuseum(String museumName);

    Guide getGuideByName(String name);

}
