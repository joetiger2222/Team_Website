import { Component } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isMenuCollapsed = true;

  scrollToPortofolio(){
    var portElement = document.getElementById('portfolio');
    if (portElement) {
      window.scrollTo({
        top: portElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  scrollToServices(){
    var portElement = document.getElementById('services');
    if (portElement) {
      window.scrollTo({
        top: portElement.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  scrollToProcess(){
    var portElement = document.getElementById('process');
    if (portElement) {
      window.scrollTo({
        top: portElement.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  scrollToFrontend(){
    var portElement = document.getElementById('frontend');
    if (portElement) {
      window.scrollTo({
        top: portElement.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  scrollToBackend(){
    var portElement = document.getElementById('backend');
    if (portElement) {
      window.scrollTo({
        top: portElement.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  
}
