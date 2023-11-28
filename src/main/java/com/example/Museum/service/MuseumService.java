package com.example.Museum.service;

import com.example.Museum.model.Museum;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MuseumService {

    public List<Museum> findAll();

}
