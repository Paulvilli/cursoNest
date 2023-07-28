import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'liberty',
    },
  ];

  findAll() {
    return this.cars;
  }

  fundOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const Car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(Car);
    return Car;
  }

  update(id: string, UpdateCarDto: UpdateCarDto) {
    let carDB = this.fundOneById(id);

    if (UpdateCarDto.id && UpdateCarDto.id !== id)
      throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...UpdateCarDto, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.fundOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
