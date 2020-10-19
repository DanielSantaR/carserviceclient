import { Component, OnInit } from "@angular/core";
import { CarService } from "../shared/car/car.service";
import { GiphyService } from "../shared/giphy/giphy.service";
import { OwnerService } from "../shared/owner/owner.service";

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"],
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  owner: any[] = [];
  owners: any[] = [];

  constructor(
    private carService: CarService,
    private giphyService: GiphyService,
    private ownerService: OwnerService
  ) {}

  ngOnInit() {
    this.ownerService.getOwners().subscribe((data) => {
      this.owners = data["_embedded"]["owners"];
      this.getCars();
    });
  }
  searchOwner(id: string) {
    for (let index = 0; index < this.owners.length; index++) {
      const element = this.owners[index]["dni"];
      if (element == id) {
        this.owner.push(this.owners[index]["name"]);
      }
    }
  }
  getCars() {
    this.carService.getAll().subscribe((data) => {
      // this.cars = data["_embedded"]["cars"]; // Para cars
      this.cars = data; // Para cool-cars
      for (const car of this.cars) { 
        this.giphyService
          .get(car.name)
          .subscribe((url) => (car.giphyUrl = url));
        if (car.ownerDni == null || car.ownerDni == "") {
          this.owner.push("No Owner");
        } else {
          this.searchOwner(car.ownerDni);
        }
      }
    });
  }
}
