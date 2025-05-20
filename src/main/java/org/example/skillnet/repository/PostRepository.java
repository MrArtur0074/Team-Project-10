package org.example.skillnet.repository;

import org.example.skillnet.model.Activity;
import org.example.skillnet.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT DISTINCT p FROM Post p JOIN p.activities a WHERE a IN :activities")
    List<Post> findByActivitiesIn(@Param("activities") Set<Activity> activities);

}