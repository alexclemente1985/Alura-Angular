import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActionDirective } from "./action.directive";
import { ActionDirectiveModule } from "./action.module";

/**NOTA: diretiva não tem componente, 
 * então poderia ter um beforeEach sem o async/await e o compileComponents() 
 * */
describe(ActionDirective.name, () =>{
    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;
    beforeEach(async ()=> {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports: [ActionDirectiveModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
    });

    it(`(DOM) (@Output appAction) should emit event with payload when ENTER key is pressed`,
        ()=> {
            /**NOTA: debugElement permite query tipada -> necessário retorno do atributo nativeElement */
            const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
            //const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
            const event = new KeyboardEvent('keyup', {key: 'Enter'});
            divEl.dispatchEvent(event);
            expect(component.hasEvent()).toBeTrue()
    });

    it(`(DOM) (@Output appAction) should emit event with payload when clicked`,
        ()=> {
            const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
            const event = new Event('click');
            divEl.dispatchEvent(event);
            expect(component.hasEvent()).toBeTrue()
    });
    it(`(DOM) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`,
        ()=> {
            const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
            const clickEvent = new Event('click');
            const keyboardEvent = new KeyboardEvent('keyup', {key: 'Enter'});
            divEl.dispatchEvent(clickEvent);
            expect(component.hasEvent()).withContext('Click event').toBeTrue();
            divEl.dispatchEvent(keyboardEvent);
            expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue();
    });
});

/**DUMMY COMPONENT */
@Component({
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
    private event: Event | null = null;

    public actionHandler(event: Event): void{
        this.event = event;
    }

    public hasEvent(): boolean{
        return !!this.event;
    }
    public clearEvent(): void{
        this.event = null
    }
}