import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "angular-home",
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./home.css"],
})
export class AngularHomeComponent {}
