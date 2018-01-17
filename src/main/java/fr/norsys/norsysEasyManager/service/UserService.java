package fr.norsys.norsysEasyManager.service;

import java.util.List;

import fr.norsys.norsysEasyManager.model.Project;

public interface UserService {

    Project findById(Long id);

    Project findByName(String name);

    void saveUser(Project user);

    void updateProject(Project user);

    void deleteUserById(Long id);

    void deleteAllUsers();

    List<Project> findAllUsers();

    boolean isUserExist(Project user);
}
