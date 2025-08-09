package com.sunbeam.security;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@AllArgsConstructor
@Component
@Slf4j

public class CustomJwtFilter extends OncePerRequestFilter {
	
	private final JwtUtils jwtUtils;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		String headerValue = request.getHeader("Authorization");
		if(headerValue != null && headerValue.startsWith("Bearer ")) {
			String jwt = headerValue.substring(7);
			
			Authentication authentication = jwtUtils.populateAuthenticationTokenJWT(jwt);
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			
		}
		
		filterChain.doFilter(request, response);
		
		
		// TODO Auto-generated method stub
		
	}

}
