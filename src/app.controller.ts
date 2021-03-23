import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello")
  sayHello(): string {
    return `<div>ㅎㅎ</div>`
  }

  @Get("/mix")
  showAll(): string {
    return this.appService.getElementOne() + this.appService.getElementTwo();
  }
}
