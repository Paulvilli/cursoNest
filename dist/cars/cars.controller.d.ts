import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAlllCars(): import("./interfaces/car.interface").Car[];
    getCarById(id: string): import("./interfaces/car.interface").Car;
    CreateCar(createCarDto: CreateCarDto): import("./interfaces/car.interface").Car;
    updateCar(id: string, UpdateCarDto: UpdateCarDto): import("./interfaces/car.interface").Car;
    deleteCar(id: string): void;
}
