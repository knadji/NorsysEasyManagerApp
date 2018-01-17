package fr.norsys.norsysEasyManager.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.norsys.norsysEasyManager.model.Project;
import fr.norsys.norsysEasyManager.repositories.UserRepository;
import fr.norsys.norsysEasyManager.service.UserService;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public Project findById(final Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public Project findByName(final String name) {
        return userRepository.findByName(name);
    }

    @Override
    public void saveUser(final Project user) {
        userRepository.save(user);
    }

    @Override
    public void updateProject(final Project user){
        saveUser(user);
    }

    @Override
    public void deleteUserById(final Long id){
        userRepository.delete(id);
    }

    @Override
    public void deleteAllUsers(){
        userRepository.deleteAll();
    }

    @Override
    public List<Project> findAllUsers(){
        return userRepository.findAll();
    }

    @Override
    public boolean isUserExist(final Project user) {
        return findByName(user.getName()) != null;
    }

}
