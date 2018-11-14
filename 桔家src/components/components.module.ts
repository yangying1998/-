import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { IonicModule} from 'ionic-angular';
@NgModule({
	declarations: [AComponent],
	imports: [ 
		
		IonicModule.forRoot(ComponentsModule),
	],
	exports: [AComponent]
})
export class ComponentsModule {}
