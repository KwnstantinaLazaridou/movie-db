import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostPopularComponent } from './features/most-popular/most-popular.component';
import { KidsComponent } from './features/kids/kids.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'most-popular', component: MostPopularComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent }
    ]
  },
  {
    path: 'kids', component: KidsComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent }]
  },
  {
    path: 'search/:searchTerm', component: SearchComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
