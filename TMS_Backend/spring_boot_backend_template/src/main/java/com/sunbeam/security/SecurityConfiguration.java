package com.sunbeam.security;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.AllArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@AllArgsConstructor
public class SecurityConfiguration {
	
	private final PasswordEncoder encoder;
	private final CustomJwtFilter customJwtFilter;
	private JwtAuthEntryPoint jwtAuthEntryPoint;
	
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		
		
		http.cors(cors -> cors.configurationSource(request -> {
	        var corsConfig = new org.springframework.web.cors.CorsConfiguration();
	        corsConfig.setAllowedOrigins(List.of("http://localhost:5173")); // frontend URL
	        corsConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	        corsConfig.setAllowedHeaders(List.of("Authorization", "Content-Type"));
	        corsConfig.setAllowCredentials(true);
	        return corsConfig;
	    }));
		
		http.csrf(csrf -> csrf.disable());
		
		http.authorizeHttpRequests(request -> 
		request.requestMatchers("/swagger-ui/**","/v**/api-docs/**", "/user/signin", "/user/signup","/operator/signup").permitAll()
		.requestMatchers(HttpMethod.GET,"/user/**").hasRole("PASSANGER")
		.requestMatchers(HttpMethod.GET,"/operator/**").hasRole("BUSOPERATOR")
		.requestMatchers(HttpMethod.POST,"/route/**").hasRole("BUSOPERATOR")
		.requestMatchers(HttpMethod.DELETE,"/bus/**").hasRole("BUSOPERATOR")
		.requestMatchers(HttpMethod.POST,"/bus/**").hasRole("BUSOPERATOR")
		.anyRequest().authenticated());
				
		http.sessionManagement(session -> 
		session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
		http.addFilterBefore(customJwtFilter, UsernamePasswordAuthenticationFilter.class);
		
		http.exceptionHandling(ex-> ex.authenticationEntryPoint(jwtAuthEntryPoint));
		
		
		
		return http.build();		
		
	}
	
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration mgr) throws Exception {
		return mgr.getAuthenticationManager();
	}
	

}
