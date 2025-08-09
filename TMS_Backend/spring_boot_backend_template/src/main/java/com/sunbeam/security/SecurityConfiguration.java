package com.sunbeam.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
		
		http.csrf(csrf -> csrf.disable());
		
		http.authorizeHttpRequests(request -> 
		request.requestMatchers("/swagger-ui/**","/v**/api-docs/**", "/user", "/user/signup").permitAll()
		.requestMatchers(HttpMethod.GET,"/user/**").hasRole("PASSANGER")
		.requestMatchers(HttpMethod.GET,"/route").hasRole("PASSANGER")
		.requestMatchers(HttpMethod.GET,"/operator/**").hasRole("OPERATOR")
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
