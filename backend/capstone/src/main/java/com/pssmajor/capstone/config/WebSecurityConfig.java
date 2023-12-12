package com.pssmajor.capstone.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled=true)
@RequiredArgsConstructor
public class WebSecurityConfig implements WebMvcConfigurer {
	  private static final String[] WHITE_LIST_URLS = {

	            


	            "/hello", "/signup", "/login" , "/addCourse" , "/addCourse**","/content","/content/*", "/allCourse",
	            "http://localhost:3000/", "/addEnrollment**", "/addEnrollment", "myCourse","/enrolledProgress", 
	            "/enrolledCompleted", "/enrolledCourses", "/feedback", "/feedbackTop", "/allContent**","/forgot","/profile","/progress",
	            "/swagger-ui/**",
	            "/api-docs",
	            "/api-docs/**",
	            "/api/v1/**"

	    };

	    @Bean
	    public BCryptPasswordEncoder passwordEncoder() {

	        return new BCryptPasswordEncoder();

	    }

	   

	    @Bean

	    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

	        http.cors(cors -> cors.disable())

	        .csrf(csrf -> csrf.disable())

	        .authorizeHttpRequests(authorize -> authorize

	                .requestMatchers(WHITE_LIST_URLS).permitAll()

	                );

	        return http.build();

	    }
	    
	    public void addCorsMapping(CorsRegistry registry) {
	    	registry.addMapping("http://localhost:3000/**")
            .allowedMethods("*")
            .allowedOrigins("http://localhost:3000/*");
	    }
}
