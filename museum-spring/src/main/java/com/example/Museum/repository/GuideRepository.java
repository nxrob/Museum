package com.example.Museum.repository;

import com.example.Museum.model.Guide;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuideRepository extends CrudRepository<Guide, Integer>{
    List<Guide> findAll();
}
