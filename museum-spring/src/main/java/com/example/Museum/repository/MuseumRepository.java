package com.example.Museum.repository;

import com.example.Museum.model.Museum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MuseumRepository extends CrudRepository<Museum, Integer> {

    List<Museum> findAll();
    Museum findByNameContains(String name);
    Museum findById(int id);
}
