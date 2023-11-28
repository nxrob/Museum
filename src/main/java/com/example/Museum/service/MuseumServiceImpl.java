package com.example.Museum.service;

import com.example.Museum.model.Museum;
import com.example.Museum.repository.MuseumRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@AllArgsConstructor
public class MuseumServiceImpl implements MuseumService {

    private final MuseumRepository museumRepository;

    @Override
    public List<Museum> findAll() {
        List<Museum> museums = new ArrayList<>();
        Iterable<Museum> museumsItr = museumRepository.findAll();
        museumsItr.forEach(museums::add);
        return museums;
    }

}
