import { NgModule } from '@angular/core';  
import { DishRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { SharedModule} from './../../shared/shared.module';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DishCategoryConfigComponent } from './dish-category-config/dish-category-config.component';
@NgModule({
  imports: [
    SharedModule,
    DishRoutingModule,    
  ],
  declarations: [DishComponent,DishMenuComponent, CardDetailsComponent, CheckoutComponent, DishCategoryConfigComponent ],
 
})
export class DashboardModule { }