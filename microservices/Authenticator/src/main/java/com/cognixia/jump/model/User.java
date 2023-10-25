package com.cognixia.jump.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.cognixia.jump.model.User.Role;

@Entity
public class User {
	
	public static enum Role {
		ROLE_USER, ROLE_HEAD, ROLE_ADMIN   // roles should start with capital ROLE_ and be completely capital letters
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank
	@Column(unique = true, nullable = false)
	private String username;
	
	@NotBlank
	@Column(nullable = false)
	private String password;
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String email;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role;
	
	@Column(columnDefinition = "boolean default true")
	private boolean enabled;
	
	
	public User(Integer id, @NotBlank String username, @NotBlank String password, @NotBlank String name,
			 @NotBlank String email, Role role, boolean enabled) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.role = role;
		this.enabled = enabled;
	}

	public User() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name + ", email="
				+ email + ", role=" + role + ", enabled=" + enabled + "]";
	}

	
}
