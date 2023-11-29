package com.example.Museum;

import com.example.Museum.model.Museum;
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

import static org.junit.jupiter.api.Assertions.assertEquals;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
@Slf4j
public class MuseumWithMockHttpRequestTest {

    @Autowired
    MockMvc mockMvc;
    ObjectMapper mapper = new ObjectMapper();

    @Test
    void testFindAllMuseums() throws Exception {
        int expectedLength = 15;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Museum[] museums = mapper.readValue(contentAsString, Museum[].class);

        assertEquals(expectedLength, museums.length);
    }

    @Test
    void testAllWorksInMuseum() throws Exception {
        int expectedLength = 13;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/Louvre Museum")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

    @Test
    void testWorksBySpecificArtistInSpecificMuseum() throws Exception {
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/museum/Prado/Leonardo da Vinci")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals("Madonna of the Carnation", objects[0].getTitle());
    }


}