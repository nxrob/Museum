package com.example.Museum.repository;

import com.example.Museum.model.Guide;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuideRepository extends CrudRepository<Guide, Integer>{
    List<Guide> findAll();

    Guide getGuideByName(String name);

    @Query("SELECT l.rating FROM GuideLookup l JOIN Museum m ON m.id = l.museum_id JOIN Guide g ON g.id = l.guide_id WHERE g.name LIKE %:guideName% AND m.name LIKE %:museumName%")
    int getIndividualRating(String guideName, String museumName);
}
