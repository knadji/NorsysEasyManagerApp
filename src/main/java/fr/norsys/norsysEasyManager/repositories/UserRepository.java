package fr.norsys.norsysEasyManager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.norsys.norsysEasyManager.model.Project;

@Repository
public interface UserRepository extends JpaRepository<Project, Long> {

    Project findByName(String name);

}
