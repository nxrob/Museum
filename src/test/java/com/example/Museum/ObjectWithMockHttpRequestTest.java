package com.example.Museum;

import com.example.Museum.model.Object;
import com.fasterxml.jackson.databind.ObjectMapper;
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
public class ObjectWithMockHttpRequestTest {

    @Autowired
    MockMvc mockMvc;
    ObjectMapper mapper = new ObjectMapper();

    @Test
    void testFindAllObjects() throws Exception {
        int expectedLength = 66;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

    @Test
    void testFilterInAllForTitle() throws Exception {
        int expectedLength = 2;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/?filter=dan")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

    @Test
    void testFilterInAllForArtistName() throws Exception {
        int expectedLength = 11;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/?filter=vinci")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

    @Test
    void testFindLocation() throws Exception {
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/Madonna of the Carnation/location")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                        .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        //String output = mapper.readValue(contentAsString, String.class);

        assertEquals("Madonna of the Carnation by Leonardo da Vinci is housed at the Museo Nacional del Prado (Madrid, Spain).", contentAsString);
    }

    @Test
    void testObjectsInStyleOf() throws Exception {
        int expectedLength = 13;

        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/Surrealism")
                        .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();

        Object[] objects = mapper.readValue(contentAsString, Object[].class);

        assertEquals(expectedLength, objects.length);
    }

}