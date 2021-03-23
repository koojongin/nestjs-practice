import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getElementOne(): string {
    return "<div>맨위</div>";
  }
  getElementTwo(): string {
    return "<div>투</div>";
  }
}
