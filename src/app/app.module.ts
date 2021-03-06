import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FoodService} from '../services/food.service';
import {FoodItemComponent} from '../components/food-item/food-item.component';
import {AddFoodComponent} from '../components/add-food/add-food.component';
import {appRoutes} from './app.routes';
import {SearchFoodComponent} from '../components/search-food/search-food.component';
import { RoundPipe } from '../pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    AddFoodComponent,
    SearchFoodComponent,
    RoundPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {}
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatSelectModule, MatInputModule, MatToolbarModule, MatCardModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
