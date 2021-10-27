
//criando um objeto com cada link das minhas redes sociais
 const linksRedeSocial = {
     github: "Arielmlopes",
     instagram: "arielmlopes",
     facebook: "arielmlopes"
    
 }

 function mudandoLinksRedeSocial(){
      for( let li of socialLinks.children){
          const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksRedeSocial[social]}`

      }
 }

 mudandoLinksRedeSocial()

   function getGithubInfos(){
    const url = `https://api.github.com/users/${linksRedeSocial.github}`
    fetch(url)
      .then(response => response.json())
       .then(data =>  {
        nameUser.textContent = data.name 
        bioUser.textContent = data.bio
        FotoUser.src = data.avatar_url 
       })
   }
   getGithubInfos()


   VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".box"));