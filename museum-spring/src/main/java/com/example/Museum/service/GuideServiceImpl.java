package com.example.Museum.service;


import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Guide;
import com.example.Museum.model.Museum;
import com.example.Museum.repository.GuideRepository;
import com.example.Museum.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class GuideServiceImpl implements GuideService {

    private GuideRepository guideRepository;
    private MuseumRepository museumRepository;

    @Override
    public List<Guide> findAll() {
        return guideRepository.findAll();
    }

    @Override
    public List<MuseumDto> getMuseumsInGuide(String name) {
        return museumRepository.getMuseumsInGuide(name);
    }

    @Override
    public Guide getGuideByName(String name) {
        return guideRepository.getGuideByName(name);
    }

    @Override
    public List<Guide> getGuidesMentioningMuseum(String museumName) {
        List<Guide> allGuides = guideRepository.findAll();
        List<Guide> guidesMentioningMuseum = new ArrayList<>();
        for(Guide guide : allGuides) {
            for(MuseumDto museum : getMuseumsInGuide(guide.getName())) {
                if(museum.getName().equals(museumName)) {
                    guidesMentioningMuseum.add(guide);
                }
            }
        }
        return guidesMentioningMuseum;
    }
}
