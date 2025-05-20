package org.example.skillnet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {
    private String name;
    private String description;
    private Set<String> activities;
}
