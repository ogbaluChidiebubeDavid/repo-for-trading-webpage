  let dropdown = document.getElementsByClassName("dropdown-btn");
  let i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  function copier() {
    // Get the text field
    var copyText = document.getElementById("walletAddress");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    }

  /*================================== Aside ==================================*/
  const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length
      for(let i = 0; i < totalNavList; i++){
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function()
        {
          for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove('back-section');
          }
          
          for(let k = 0; k < totalNavList; k++){
            if(navList[k].querySelector('a').classList.contains('active')){
              allSection[k].classList.add('back-section');
            }
            navList[k].querySelector('a').classList.remove('active')
          }
          this.classList.add('active')
          showSection(this);
          if(window.innerHeight< 1200){
            asideSectionTogglerBtn()
          }
        })
      }
      function showSection(element){
        for(let i = 0; i < totalSection; i++){
          allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector('#' + target).classList.add('active')
      }
      function updateNav(element){
        for(let i = 0; i <totalNavList; i++){
          nav[i].querySelector('a').classList.remove('active');
          const target = element.getAttribute('href').split('#')[1];
        }
      }
document.querySelector('.tradeBtn').addEventListener('click', function(){ 
  showSection(this);
  updateNav(this);
})

document.querySelector('.tradeBtn-2').addEventListener('click', function(){ 
  showSection(this);
  updateNav(this);
})

let cards = document.querySelectorAll('.investBtn')
for(let i = 0; i<cards.length; i++){
  cards[i].addEventListener('click', function(){ 
    showSection(this);
    updateNav(this);
  })
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');
      navTogglerBtn.addEventListener('click', ()=>{
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn(){
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for(let i = 0; i <totalSection; i++){
          allSection[i].classList.toggle('open');
        }
      }

      /*function closeBtn(){
            let formDivs = document.querySelectorAll('.form')
            formDivs.forEach(formDiv => {
              formDiv.style.display = 'none';
            document.querySelector('#home').style.display = 'block';
            })
        }

        function directTo(){
          window.location.href = '#invoice';
          document.getElementById('invoice').style.display = 'block';
        }*/