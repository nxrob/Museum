package com.example.Museum.service;


import com.example.Museum.dto.MuseumDto;
import com.example.Museum.model.Guide;
import com.example.Museum.repository.GuideRepository;
import com.example.Museum.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
}
