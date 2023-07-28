import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    fundOneById(id: string): Car;
    create(createCarDto: CreateCarDto): Car;
    update(id: string, UpdateCarDto: UpdateCarDto): Car;
    delete(id: string): void;
}
