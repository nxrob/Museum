package com.example.Museum.repository;

import com.example.Museum.model.Museum;
import org.springframework.data.repository.CrudRepository;

public interface MuseumRepository extends CrudRepository<Museum, Integer> {
}
