function getName(){
  const url = "https://api.github.com/users/ivanmartins090317"
   
  fetch(url)
   .then(resp => resp.json())
   .then(data => {userName.textContent= data.name
     userBio.textContent = data.bio
     pageGit.href = data.html_url
     photoPerfil.src = data.avatar_url
   })
     
    
  
}  
  
getName()

 
