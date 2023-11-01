package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;
//import com.cognixia.jump.service.NewsService;


@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository repo;
	
	//@Autowired
	//private NewsService newsService;
	
	@GetMapping("/user")
	public List<User> getAllUsers() {
		
		return repo.findAll();
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUser(@PathVariable int id) {
		
		Optional<User> found = repo.findById(id);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("Not found");
		}
		
		return ResponseEntity.status(200).body(found);
	}
	
	@GetMapping("/user/whoami")
	public ResponseEntity<?> getCurrentUser() {
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username = userDetails.getUsername();
		Optional<User> found = repo.findByUsername(username);
		if (!found.isEmpty()) {
			// FIND ALL OTHER USER RELATED INFO FROM OTHER REPOS/ENDPOINTS
			// newsService.getUserStuff
			found.get().setPassword("hidden");
			return ResponseEntity.status(200).body(found.get());
		}
		
		return ResponseEntity.status(200).body("user not found");
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		user.setId(null);
		User created = repo.save(user);
		
		return ResponseEntity.status(200).body(created);
	}
	
	@PutMapping("/user")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		
		Optional<User> found = repo.findByUsername(user.getUsername());
		if (!found.isEmpty()) {
			found.get().setName(user.getName());
			User updated = repo.save(found.get());
			
			return ResponseEntity.status(200).body(updated);
		}
		
		return ResponseEntity.status(200).body("User not found");
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) {
		
		Optional<User> found = repo.findById(id);
		if (!found.isEmpty()) {
			repo.deleteById(id);
			
			return ResponseEntity.status(200).body(found.get());
		}
		
		
		return ResponseEntity.status(200).body("User not found");
	}
}
