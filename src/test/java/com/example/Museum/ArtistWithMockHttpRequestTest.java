package com.example.Museum;

import com.example.Museum.model.Artist;
import com.example.Museum.model.Object;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
@Slf4j
public class ArtistWithMockHttpRequestTest {

    @Autowired
    MockMvc mockMvc;
    ObjectMapper mapper = new ObjectMapper();

    public String artistContentAsString() throws Exception {
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        return result.getResponse().getContentAsString();
    }

    @Test
    void testFindAllArtists() throws Exception {
        int expectedLength = 16;
        Artist[] artists = mapper.readValue(artistContentAsString(), Artist[].class);
        assertEquals(expectedLength, artists.length);
    }

    @Test
    void testFindAllWorksByArtist() throws Exception {
        int expectedLength = 8;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist/El Greco")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

    @Test
    void testFindOldestWorkByElGreco() throws Exception {

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist/El Greco/oldestnewest")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                        .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] oldestNewest = mapper.readValue(contentAsString, Object[].class);
        log.debug("In test: " + contentAsString);

        assertEquals("1577", oldestNewest[0].getYearOf());
    }

    @Test
    void testMuseumWithMostWorks() throws Exception {
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/artist/El Greco/mostworks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        assertEquals("Currently, the Museo Nacional del Prado holds the most paintings by El Greco " +
                "at a total of 5 work(s).", contentAsString);

    }

}