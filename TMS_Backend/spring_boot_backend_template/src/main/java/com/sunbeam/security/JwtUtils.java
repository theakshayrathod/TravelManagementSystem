package com.sunbeam.security;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.sunbeam.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

	@Value("${jwt.secret.key}")
	private String jwtSecret;
	
	@Value("${jwt.expiration.time}")
	private int jwtExprirationMs;
	
	private SecretKey key;

   @PostConstruct
	public void init() {
		log.info("Key {} Exp Time {}", jwtSecret, jwtExprirationMs);
		key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
	}
	
	
	public String generateJwtToken(Authentication authentication) {
		
		log.info("generate jwt token " + authentication);
		User userPrincipal =(User) authentication.getPrincipal();
		return Jwts.builder()
				.subject((userPrincipal.getUsername()))
				.issuedAt(new Date())
				.expiration(new Date(new Date().getTime() + jwtExprirationMs))
				
				.claim("authorities",getAuthoritiesInString(userPrincipal.getAuthorities()))
				
				.signWith(key,Jwts.SIG.HS256)
				.compact();
		
		
		
		
	}
	
	
	public String getUserNameFromJwtToken(Claims claims) {
		return claims.getSubject();
	}
	
	
	public Claims validateJwtToken(String jwtToken) {
		
		Claims claims = Jwts.parser()
				.verifyWith(key)
				.build()
				
				.parseSignedClaims(jwtToken)
				.getPayload();
		
		return claims;
		
	}
	
	
	
	
	public List<String> getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities){
		return authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
	}
	
	
	public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims){
		List<String> authorityNamesFromJwt = (List<String>) claims.get("authorities");
		List<GrantedAuthority> authorities = authorityNamesFromJwt.stream().map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
		authorities.forEach(System.out::println);
		return authorities;
	}
	
	
	public Authentication populateAuthenticationTokenJWT(String jwt) {
		Claims payloadClaims = validateJwtToken(jwt);
		String email = getUserNameFromJwtToken(payloadClaims);
		List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
		
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email,null, authorities);
		
		System.out.print(" is authnticated " + token.isAuthenticated());
		
		return token;
		
	}
	
	

}
