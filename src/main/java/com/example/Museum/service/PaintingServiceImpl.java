package com.example.Museum.service;

import com.example.Museum.model.Object;
import com.example.Museum.model.Painting;
import com.example.Museum.repository.PaintingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PaintingServiceImpl implements PaintingService {

    private PaintingRepository paintingRepository;

    @Override
    public List<Painting> findByStyleContains(String style) {
        return paintingRepository.findByStyleContains(style);
    }
}
