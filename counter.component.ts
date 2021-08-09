@Component({
  selector: "counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class Counter {

  count: number = 0

  addOne(){
    this.count = this.count + 1
  }  
}