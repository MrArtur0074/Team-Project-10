package org.example.skillnet.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class Organisation extends User {
    private String organisationName;
    private String organisationType;
    private String description;
    private String linkToSite;
    private String position;

    @Override
    public String getRole() {
        return "ORGANISATION";
    }
}
