
//criando um objeto com cada link das minhas redes sociais
 const linksRedeSocial = {
     github: "Arielmlopes",
     instagram: "arielmlopes",
     facebook: "arielmlopes"
    
 }

 function mudandoLinksRedeSocial(){
      for( let li of socialLinks.children){
          const social = li.getAtribute('class')
        li.children[0].href = `https://${social}.com/${linksRedeSocial[social]}`

      }
 }

//  mudandoLinksRedeSocial()

   