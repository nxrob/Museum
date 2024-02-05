FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
RUN mvn install
# ENTRYPOINT ["java","-jar","Museum-0.0.1-SNAPSHOT.jar"]