package com.example.Museum.repository;

import com.example.Museum.model.Museum;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuseumRepository extends CrudRepository<Museum, Integer> {

    Museum findByNameContains(String name);

}
