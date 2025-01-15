import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home Page'},
    {path:'about',component:AboutComponent,title:'About Page'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio page'},
    {path:'contact',component:ContactComponent,title:'Contact Page'},
    {path:'**',component:NotfoundComponent,title:'notfond page'}
];
