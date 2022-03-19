import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = parseInt(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  console.log(`NestJS server started on port: ${PORT}`);
}
bootstrap();
