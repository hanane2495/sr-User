import axios from 'axios'

export const register = newUser =>{
    return axios
       .post('http://localhost:5000/users/register',{   
        nomutilisateur: newUser.nomutilisateur,
        email:newUser.email,
        mot_de_passe : newUser.mot_de_passe
       })
       .then(res =>{
           console.log("Registred")
           localStorage.setItem('usertoken', res.data)
           return res.data
       })
       .catch(err =>{
           console.log(err)
       })
}

export const login = user =>{
    return axios
       .post('http://localhost:5000/users/login',{
        nomutilisateur: user.nomutilisateur,
        mot_de_passe : user.mot_de_passe
       })
       .then(res =>{
           localStorage.setItem('usertoken', res.data)
           return res.data
       })
       .catch(err =>{
           console.log(err)
       })
}

